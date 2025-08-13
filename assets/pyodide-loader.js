let _pyodidePromise;
export async function getPyodide() {
  if (!_pyodidePromise) {
    _pyodidePromise = loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"
    });
  }
  return _pyodidePromise;
}
