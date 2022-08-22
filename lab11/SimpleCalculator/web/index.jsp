<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
  <div class="container">
    <form method="post" id="calculator" action="/SimpleCalculator/calculator">
      <div class="row">
        <h3>
          Simple Calculator
        </h3>
      </div>
      <div class="row">
        <div class="col-md-4">
          <input type="number" id="a" name="a" class="form-control" /> + <input class="form-control" type="number" id="b" name="b" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <input type="number" id="c" name="c" class="form-control" /> - <input type="number" id="d" name="d" class="form-control" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <input type="number" id="e" name="e" class="form-control" /> * <input type="number" id="f" name="f" class="form-control" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <input type="number" id="g" name="g" class="form-control" /> / <input type="number" id="h" name="h" class="form-control" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <input type="submit" value="Submit" class="btn btn-primary" />
        </div>
      </div>
    </form>
  </div>
  </body>
</html>
