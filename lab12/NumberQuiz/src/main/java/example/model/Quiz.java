package example.model;

import java.util.Arrays;
import java.util.Iterator;

public class Quiz {
    private final String[] questions ={
        "3,1,4,1,5",
        "1,1,2,3,5",
        "1,4,9,16,25",
        "2,3,5,7,11",
        "1,2,4,8,16"
    };
    private final Integer[] answers ={9,8,36,13,32} ;

    private int numCorrect = 0;
    private int currentQuestionIndex = 0;
    
    private Iterator qIterator = null;
    private Iterator aIterator = null;

    public boolean isCorrect(String first){
        return Integer.valueOf(first) == answers[0];
    }

    public int getNumCorrect() {
        return numCorrect;
    }

    public void scoreAnswer(){
        numCorrect = numCorrect + 1;
        currentQuestionIndex = currentQuestionIndex + 1;
    }

    public int getCurrentQuestionIndex() {
        return currentQuestionIndex;
    }

    public int getNumQuestions(){
        return questions.length;
    }
    public Quiz(){
        qIterator = Arrays.asList(questions).iterator();
        aIterator = Arrays.asList(answers).iterator();
    }
    public boolean hasQ(){
        return qIterator.hasNext();
    }
    
    public String getNextQ(){
        if (hasQ()) {
            return (String)qIterator.next();
        }
        return null;
    }
    
    public boolean hasA(){
        return aIterator.hasNext();
    }
    public Integer getAnswer(){
        if (hasA()) {
            return (Integer)aIterator.next();
        }
        return null;
    }
}
