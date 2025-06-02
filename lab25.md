## Completar el Laboratorio sobre Transacciones

### 1. **Conceptos Adicionales sobre Transacciones**

#### a. **Propiedades ACID**
- **Atomicidad**: Asegura que todas las operaciones dentro de una transacción se completen. Si una falla, toda la transacción se deshace.
- **Coherencia**: Garantiza que una transacción lleve a la base de datos de un estado válido a otro estado válido.
- **Aislamiento**: Las transacciones deben ejecutarse como si fueran las únicas en el sistema, evitando interferencias entre ellas.
- **Durabilidad**: Los cambios realizados por una transacción confirmada son permanentes, incluso en caso de fallo del sistema.

#### b. **Niveles de Aislamiento**
Los niveles de aislamiento determinan cómo se gestionan las transacciones concurrentes:
- **Read Uncommitted**: Permite leer datos no confirmados.
- **Read Committed**: Solo permite leer datos confirmados.
- **Repeatable Read**: Asegura que si se lee un dato varias veces en una transacción, siempre será el mismo.
- **Serializable**: El nivel más alto, que previene que las transacciones interfieran entre sí.

### 2. **Ejemplo de Transacción en SQL**

Aquí hay un ejemplo de cómo se podrían implementar transacciones explícitas en SQL:

```sql
BEGIN TRANSACTION;

-- Actualizar saldo de cuenta
UPDATE cuentas SET saldo = saldo - 100 WHERE id_cuenta = 1;

-- Insertar registro de transacción
INSERT INTO transacciones (id_cuenta, monto, tipo) VALUES (1, 100, 'retiro');

-- Confirmar transacción
COMMIT;
```

En este ejemplo, si alguna de las operaciones falla, se podría usar `ROLLBACK` para deshacer todos los cambios realizados hasta ese momento.

### 3. **Referencias Bibliográficas**

Para complementar tu trabajo, considera las siguientes referencias:

- **Elmasri, R., & Navathe, S. B. (2015)**. *Fundamentals of Database Systems*. Pearson.
- **Date, C. J. (2004)**. *Database System Concepts*. McGraw-Hill.
- **MariaDB Documentation**. [Transactions](https://mariadb.com/kb/en/transactions/)

### 4. **Conclusión**

Las transacciones son fundamentales para garantizar la integridad y consistencia de los datos en sistemas de bases de datos. Comprender sus propiedades y cómo se implementan es crucial para cualquier desarrollador de bases de datos.

---

Puedes utilizar esta información para enriquecer tu laboratorio y demostrar una comprensión más profunda del tema. Si necesitas más detalles o ajustes específicos, házmelo saber.
