function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculateResult() {
    var result = document.getElementById('result').value;
    try {
      document.getElementById('result').value = eval(result);
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }