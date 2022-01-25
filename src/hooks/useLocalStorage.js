function useLocalStorage(verb, dbn, db) {
  let _db = "undefined";

  if (verb === "load") {
    _db = localStorage.getItem(dbn);

    return _db;
  } else if (verb === "update") {
    let val = JSON.stringify(db);
    localStorage.setItem(dbn, val);
    _db = localStorage.getItem(dbn);

    _db = JSON.parse(_db);
  }

  const updateDB = (dbn, db) => {
    localStorage.setItem(dbn, db);
  };

  return [_db, updateDB];
}

export default useLocalStorage;
