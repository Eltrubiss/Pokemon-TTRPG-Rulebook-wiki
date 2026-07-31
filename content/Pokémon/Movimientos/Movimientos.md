---
tags:
  - Ataques
aliases:
  - Movimiento
---
Los **Movimientos** son las técnicas, ataques y habilidades que los Pokémon utilizan en combate o fuera de él. Cada movimiento es único y su eficacia depende tanto del poder intrínseco de la criatura como de su veteranía.

Cada Pokémon es capaz de recordar hasta cuatro movimientos. Usualmente, cuando son apenas crías conocen uno o dos, y con la edad van descubriendo más maneras de utilizar sus capacidades mágicas. Estos son los tipos de aprendizaje de movimiento de un Pokémon:

- ***Movimientos aprendidos por Nivel:*** Los movimientos aprendidos por nivel son los movimientos que un Pokémon aprende naturalmente al subir de nivel. Cada vez que un Pokémon sube de nivel, podrá escoger aprender los movimientos correspondientes a ese nivel.
- ***Movimientos aprendidos por Tutela:*** Los movimientos aprendidos por tutela son movimientos que se aprenden de observarlo de otro Pokémon. Nosotros hemos podido enseñarles movimientos a través de [[Maquinas Técnicas (MT)]] o de [[Tutores de Movimiento]].

Cada movimiento tiene una [[Carta de movimiento]] que te servirá para declarar qué hará tu Pokémon en su turno (véase [[Reglas/Combate/Acciones en Combate/Acciones en Combate\|Acciones en Combate]] para más información).


### Anatomía de un Movimiento

| TIPO                | PP                                             | POTENCIA           | PRECISIÓN             | CLASE                                 |
| :------------------ | :--------------------------------------------- | :----------------- | :-------------------- | ------------------------------------- |
| Elemento del ataque | Cantidad de Veces que puede usar un Movimiento | Dados de daño base | Valor objetivo (d100) | [[Físico]], [[Especial]] o [[Estado]] |
#### Descripción
Se describe qué efectos posee el movimiento
___
#### [[Tipos|Tipo]]
Cada Movimiento surge de un aspecto de nuestro entorno. Al igual que los Pokémon, los Movimientos tienen un [[Tipos|Tipo]]. El tipo de un movimiento determina su interacción con los Pokémon que los usan y aquellos que son sus objetivos. Por ejemplo, si un [[Pokedex/5- Teselia/0623 - Golurk\|Golurk]] utiliza [[Pokémon/Movimientos/Terremoto\|Terremoto]] (Movimiento tipo [[Pokémon/Tipos/Tierra\|Tierra]]) contra un [[Pokedex/5- Teselia/0520 - Tranquill\|Tranquill]] (Pokémon tipo [[Pokémon/Tipos/Volador\|Volador]]), [[Pokedex/5- Teselia/0520 - Tranquill\|Tranquill]] será inmune a los efectos de ese movimiento debido a su tipo, pues los Pokémon tipo [[Pokémon/Tipos/Volador\|Volador]] son inmunes a los Movimientos tipo [[Pokémon/Tipos/Tierra\|Tierra]] debido a que, al poder volar, pueden evadir los efectos que ocurran en el suelo.
El tipo determina las debilidades y resistencias según la tabla de tipos elemental.

Los Pokémon que tengan el mismo tipo que su movimiento, podrán beneficiarse del ***STAB (Same Type Attack Boost).*** Añadiendo un bonificador a la [[Tirada de Ataque]] igual a su [[Reglas/Bonificador de Experiencia\|Bonificador de Experiencia]].

#### PP (Puntos de Poder)
Los PP de un movimiento determinan la cantidad de veces que un Pokémon puede usar un movimiento antes de cansarse. Una vez que un movimiento llega a 0 PPs no puede volver a usarlo. Los PPs de todos los movimientos de un Pokémon se restauran luego de [[Descansar]].

Algúnos movimientos no tienen PPs definidos. Esos movimientos no tienen un límite de usos y el Pokémon puede usarlos cuantas veces quiera.

Un movimiento consume PP únicamente cuando el Pokémon comienza a ejecutarlo. Si algún efecto impide que actúe antes de empezar (parálisis, sueño, congelación, retroceso, enamoramiento, confusión, etc.), no consume PP. Una vez iniciado, el PP se consume aunque el movimiento falle, no tenga efecto, sea bloqueado o el usuario sea derrotado antes de completarlo.

#### Potencia
En caso de ser un movimiento ofensivo, la Potencia representa la cantidad de daño que este es capaz de infligir. La potencia de un movimiento se puede entender en dos partes:

- ***Dados de daño.*** Determina la cantidad y el tipo de dados que se arrojan para definir el daño que este inflija. El movimiento indica la cantidad de dados que el Pokémon lanzará de base. Por cada nivel del [[Reglas/Bonificador de Experiencia\|Bonificador de Experiencia]] por encima de +1, el movimiento recibe un dado extra de daño. Así, un Pokémon con un [[Reglas/Bonificador de Experiencia\|Bonificador de Experiencia]] de +3 y un ataque con 1d8 de dados de daño podrá atacar con 1d8 + 2d8 dados de daño.

- ***Bonificadores.*** Son los valores fijos que se suman o se restan al valor final de la [[Tirada de Ataque]]. Según si el ataque es [[Físico]] o [[Especial]], se sumará su **Bonificador de Característica** de [[Pokémon/Características Pokémon/Características/Atk\|Ataque Físico]] o [[Pokémon/Características Pokémon/Características/SpAtk\|Ataque Especial]] respectivamente.

El daño infligido a un Pokémon pasa primero por **Efectos externos** (como [[Pokémon/Movimientos/Pantalla de Luz\|Pantalla de Luz]]) si es que hay, luego se le resta la [[Pokémon/Características Pokémon/Características/Def\|Defensa Física]] o [[Pokémon/Características Pokémon/Características/SpDef\|Defensa Especial]] del Pokémon, según si el movimiento es [[Físico]] o [[Especial]] respectivamente y luego se considera si el Pokémon es **Resistente o Vulnerable al [[Tipos|Tipo]] del Movimiento**.

#### Precisión
Es el valor que el Pokémon debe igualar o superar hacia abajo con **1d100** para acertar.
- **Éxito:** Si el resultado es $\le$ (menor) a la **Precisión** del movimiento, este acierta.
- **Éxito Crítico:** Si saca un número doble (11, 22, etc.) por debajo de la precisión y se trata de un movimiento ofensivo, este se vuelve un [[Golpe Crítico]].
- **Fallo :** Si el resultado es $\$ (mayor) a la **Precisión** del movimiento, el movimiento falla y no se efectúa el movimiento.

#### Clase
La Clase del Movimiento determina cómo este influye en combate. Si el movimiento tiene Clase [[Físico]] o [[Especial]], el movimiento se considera un movimiento ofensivo.

- **[[Físico]]:** Movimientos que requieren contacto o fuerza bruta.
- **[[Especial]]:** Ataques elementales a distancia o de energía.
- **[[Estado]]:** Movimientos que no infligen daño directo, sino que alteran el campo o las estadísticas.

#### Descripción
Espacio para detallar el efecto narrativo y mecánico específico del movimiento. Describe los *efectos* del movimiento. En caso de tener una probabilidad de que los *efectos* se apliquen, se indica los valores necesarios para que estos se apliquen. Ejemplo: [[Colmillo Hielo]] dirá "... 1-10 [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Mayores/Congelado\|Congela]] al objetivo. 11-20 Deja [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Menores/Aturdido\|Aturdido]] al objetivo."

___
### Resolución de Movimiento
Antes de empezar, reafirmemos un concepto: **La [[Barra Pokémon]].**

> [!RULE] [[Barra Pokémon]]
> La Barra Pokémon es el intervalo de resultados posibles de una tirada de 1d100 utilizada para resolver el impacto y los efectos de un movimiento.

Cuando un Pokémon utiliza un movimiento, este se resuelve en tres etapas. Estas etapas son **Impacto**, **Efectos**, **Respuesta**.

#### 1 - Impacto
se arroja 1d100. Este debe ser menor al valor de **Precisión**. Si es mayor, este falla. Existen [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado\|Problemas de Estado]] del Pokémon que tienen un porcentaje de **evitar que el Pokémon efectúe su movimiento**, siendo los [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado\|Problemas de Estado]]:

- ***[[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Mayores/Paralizado\|Paralizado]].*** ([[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Mayores/Problemas de Estado Mayores\|Problema de Estado Mayor]])
- ***[[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Menores/Confundido\|Confundido]] y [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Menores/Enamorado\|Enamorado]]***. ([[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Menores/Problemas de Estado Menores\|Problemas de Estado Menores]])

Los [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado\|Problemas de Estado]] que impiden actuar ocupan parte del intervalo de éxito de la [[Barra Pokémon]], comenzando desde el valor de Precisión hacia abajo. Es decir, si la precisión es de 90, y tienen una probabilidad de 30, afectarán los valores del 90 al 30. Si un [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Mayores/Problemas de Estado Mayores\|Problema de Estado Mayor]] y un [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Menores/Problemas de Estado Menores\|Problema de Estado Menor]] afectan al mismo Pokémon, la [[Barra Pokémon]] de impacto se modifica siempre en el siguiente orden:

**Fallo → Estados Menores → Estados Mayores → Impacto.**

Un Pokémon solo puede estar afectado por un Estado Menor que impida actuar a la vez. Si obtiene uno nuevo, este sustituye al anterior.

**Si el Pokémon no consigue ejecutar el movimiento por uno de estos [[Estado|Estados]] no consume PPs.**

#### 2 - Efectos
Después de determinar si el movimiento impacta, realiza una nueva tirada de 1d100 para resolver los efectos del movimiento. Se calcula el daño de la **Potencia** si es que había y se valora la existencia de *Efectos* del [[Pokémon/Movimientos/Movimientos\|Movimiento]] y de los posibles *Efectos* de la [[Habilidades|Habilidad]]. Primero se asignan los intervalos correspondientes a los efectos del Movimiento. Si la Habilidad del Pokémon también puede activar un efecto al impactar, este utilizará los siguientes valores disponibles de la [[Barra Pokémon]].

#### 3 - Respuesta
Si el Pokémon objetivo del movimiento tiene posibilidad de responder a las condiciones que presenta el movimiento enemigo (Ejemplo [[Punto tóxico]] con los movimientos de contacto). Este puede arrojar 1d100 para intentar activar sus efectos.
___
**Notas relacionadas:**
- [[Pokémon/Movimientos/Movimientos de Prioridad/Movimientos de Prioridad\|Movimientos de Prioridad]]
- [[Pokémon/Movimientos/Movimientos de Repetición/Movimientos de Repetición\|Movimientos de Repetición]]

[^1]: 
