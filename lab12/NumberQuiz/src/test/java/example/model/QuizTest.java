package example.model;

import org.junit.*;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class QuizTest {
    Quiz quizUnderTest = new Quiz();

    public QuizTest() {

    }

    @BeforeClass
    public static void setUpClass() throws Exception {
    }

    @AfterClass
    public static void tearDownClass() throws Exception {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }
    @Test
    public void testIsCorrect() {
        /* should be at first question, answer should be "9" */
        assertTrue("first question answer should be '9'", quizUnderTest.isCorrect("9"));
    }

    @Test
    public void testGetNumberQuestions() {
        /* should be at first question, answer should be 5 */
        assertEquals(5, quizUnderTest.getNumQuestions());
    }

    @Test
    public void testGetNumberCorrect() {
        /* should be at first question, answer should be 0 */
        assertEquals(0, quizUnderTest.getNumCorrect());

        quizUnderTest.scoreAnswer(); //should increment the score and the current question number
        assertEquals(1, quizUnderTest.getNumCorrect());
        assertEquals(1, quizUnderTest.getCurrentQuestionIndex());

    }
}