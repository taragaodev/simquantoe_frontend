import * as SQLite from 'expo-sqlite'

export const DatabaseConnection = {
  getConnection: () => SQLite.openDatabase("supermarket.db")
    .transaction(function (txn) {
      txn.executeSql("SELECT * FROM products", [], function (tx, res) {
        console.log("item:", res.rows.length);
        if (res.rows.length == 0) {
          txn.executeSql("DROP TABLE IF EXISTS products", []) /
            txn.executeSql(
              "CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), description VARCHAR(250), price VARCHAR(10))",
              []
            );
        }
      });
    })
}