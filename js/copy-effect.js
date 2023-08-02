function copy_effect() {
    var copybtn = document.getElementById("copy-field");
    copybtn.animate(
        [
          { background: '#494949'},
          { background: '#222121'}
        ], {
          duration: 200,
          iterations: 1
        }
      );
}