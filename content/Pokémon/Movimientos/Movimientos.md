---
tags:
  - Ataques
aliases:
  - Movimiento
---
Los **Movimientos** representan las técnicas que un Pokémon ha aprendido para interactuar con el mundo. Son manifestaciones de sus capacidades físicas, elementales o sobrenaturales, y constituyen la principal forma en que un Pokémon actúa tanto dentro como fuera del combate.

A diferencia de un Entrenador, que resuelve problemas mediante sus Habilidades y Profesiones, un Pokémon solo puede realizar aquellas acciones que sus Movimientos le permiten. Un **Surf** puede utilizarse para cruzar un río, un **Látigo Cepa** para alcanzar un objeto lejano o trepar un árbol, y un **Psíquico** para mover objetos sin necesidad de tocarlos. La utilidad de un Movimiento no se limita a su descripción de combate; los jugadores son libres de proponer nuevos usos siempre que estos sean coherentes con la naturaleza del Movimiento.

Cada Pokémon puede recordar hasta **cuatro Movimientos** al mismo tiempo. Estos representan las técnicas que domina y mediante las cuales expresa sus capacidades. A medida que un Pokémon crece, puede aprender nuevos Movimientos y sustituir otros por aquellos que considere más útiles para afrontar los desafíos de la aventura.

Los Pokémon aprenden Movimientos de distintas maneras:

- **Movimientos aprendidos por Nivel:** Son los Movimientos que un Pokémon aprende de forma natural conforme gana experiencia. Cada vez que sube de nivel, puede aprender los Movimientos correspondientes a ese nivel.
- **Movimientos aprendidos por Tutela:** Son Movimientos adquiridos mediante la enseñanza de otro Pokémon o gracias a métodos especiales, como las Máquinas Técnicas (MT) o los Tutores de Movimiento.

Cada movimiento tiene una [[Carta de movimiento]] que te servirá para declarar qué hará tu Pokémon en su turno (véase [[Reglas/Combate/Acciones en Combate/Acciones en Combate\|Acciones en Combate]] para más información).


### Anatomía de un Movimiento

Cada Movimiento se representa mediante una **Carta de Movimiento**, la cual reúne toda la información necesaria para utilizarlo. En ella se describen sus propiedades, sus efectos y las reglas que determinan cómo funciona tanto dentro como fuera del combate.

Comprender cada uno de sus apartados permitirá interpretar correctamente las capacidades del Movimiento y resolver sus efectos cuando sea utilizado.

>| TIPO                | PP                                             | POTENCIA           | PRECISIÓN             | CLASE                                 |
>| :------------------ | :--------------------------------------------- | :----------------- | :-------------------- | ------------------------------------- |
>| Elemento del ataque | Cantidad de Veces que puede usar un Movimiento | Dados de daño base | Valor objetivo | [[Físico]], [[Especial]] o [[Estado]] |
>### Descripción
>Se describe qué efectos posee el movimiento
___
#### Descripción
La Descripción explica los efectos narrativos y mecánicos del Movimiento. Aunque suele indicar su funcionamiento en combate, también define el alcance de sus capacidades fuera de él. Los jugadores pueden proponer nuevos usos para un Movimiento siempre que sean coherentes con su naturaleza y con los efectos descritos.

Algunos Movimientos incluyen efectos, muchos de estos con una probabilidad de activarse. En esos casos, la Descripción indica el intervalo de resultados necesario para que cada efecto ocurra. Por ejemplo, **[[Colmillo Hielo]]** indica: _"1-10 [[Congelado|Congela]] al objetivo. 11-20 Deja [[Aturdido]] al objetivo."_

#### [[Tipos|Tipo]]
<<<<<<< Updated upstream
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
=======
Todo Movimiento pertenece a uno de los **Tipos Elementales**, los cuales representan el origen o la naturaleza de la energía que utiliza. Al igual que los Pokémon, los Movimientos poseen un Tipo que determina cómo interactúan con otros Pokémon y con el entorno.

Cuando un Movimiento afecta a un Pokémon, su Tipo determina si este resulta **Vulnerable**, **Resistente** o **Inmune** según la Tabla de Tipos. Por ejemplo, un [[0520 - Tranquill|Tranquill]] (tipo [[Volador]]) es inmune a [[Terremoto]] (tipo [[Tierra]]), ya que el Movimiento afecta el suelo y el Pokémon puede evitar sus efectos al encontrarse en el aire.

Además, si un Pokémon utiliza un Movimiento que comparte uno de sus Tipos, obtiene el beneficio de **STAB (Bonus de Ataque de Mismo Tipo en inglés)**, añadiendo a la **Potencia** del movimiento un bonificador igual a su [[Bonificador de Experiencia]].
>>>>>>> Stashed changes

#### Clase
La Clase determina la forma en que un Movimiento utiliza las capacidades del Pokémon. Además de definir su comportamiento en combate, establece qué Características intervienen para resolver sus efectos.

- **[[Físico]]:** Representa Movimientos que dependen de la fuerza, el contacto directo o el impacto del cuerpo del Pokémon. Los Movimientos [[Físico|Físicos]] suman el **[[Características Pokémon|Bonificador de Característica]]** de **[[Atk|Ataque Físico]]** del usuario a la **Potencia** del ataque y se enfrentan a la **[[Def|Defensa Física]]** del objetivo.
- **[[Especial]]:** Representa Movimientos que manifiestan energía elemental, poderes sobrenaturales o capacidades que no dependen de la fuerza física. Los Movimientos [[Especial|Especiales]] suman el **[[Características Pokémon|Bonificador de Característica]]** de **[[SpAtk|Ataque Especial]]** del usuario a la **Potencia** del ataque y se enfrentan a la **[[SpDef|Defensa Especial]]** del objetivo.
- **[[Estado]]:** Representa Movimientos cuyo propósito principal no es infligir daño directo, sino alterar el combate, modificar el entorno o producir efectos sobre uno o varios objetivos.

<<<<<<< Updated upstream
#### Descripción
Espacio para detallar el efecto narrativo y mecánico específico del movimiento. Describe los *efectos* del movimiento. En caso de tener una probabilidad de que los *efectos* se apliquen, se indica los valores necesarios para que estos se apliquen. Ejemplo: [[Colmillo Hielo]] dirá "... 1-10 [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Mayores/Congelado\|Congela]] al objetivo. 11-20 Deja [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Menores/Aturdido\|Aturdido]] al objetivo."
=======
#### PP (Puntos de Poder)
Los **PP (Puntos de Poder)** representan la cantidad de veces que un Pokémon puede utilizar un Movimiento antes de agotarse. Cada Movimiento posee sus propios PP y estos se registran de forma independiente.

Cuando un Movimiento alcanza **0 PP**, no puede volver a utilizarse hasta que el Pokémon descanse. Tras un **Descanso**, todos los PP de sus Movimientos se restauran por completo.

Algunos Movimientos no poseen una cantidad de PP. Estos pueden utilizarse indefinidamente y nunca se consideran agotados.

> **Consumo de PP**
>Los PP se consumen cuando un Pokémon **ejecuta** un Movimiento.
>Si un efecto impide que el Pokémon llegue a realizarlo antes de comenzar su ejecución (como Parálisis, Sueño, Congelamiento, Retroceso, Enamoramiento o Confusión), el Movimiento **no consume PP**.
>Una vez iniciado, el PP se consume aunque el Movimiento falle, no tenga efecto, sea bloqueado o el usuario quede fuera de combate antes de resolverlo.

#### Potencia
La **Potencia** representa la capacidad de un Movimiento para infligir daño. Solo los Movimientos **Físicos** y **Especiales** poseen Potencia, mientras que los Movimientos de **Estado** no infligen daño directo salvo que su Descripción indique lo contrario.

La Potencia de un Movimiento está compuesta por dos elementos:

- **Dados de Daño.** Indican la cantidad y el tipo de dados que se lanzan para determinar el daño base del Movimiento. Por cada nivel del **[[Bonificador de Experiencia]]** por encima de **+1**, el Movimiento obtiene un dado adicional del mismo tipo. Por ejemplo, un Pokémon con un Bonificador de Experiencia de **+3** que utilice un Movimiento de **1d8** lanzará **3d8**.
- **Bonificadores.** Todo Movimiento ofensivo añade el **[[Características Pokémon|Bonificador de la Característica]]** correspondiente, según la Clase del Movimiento. Además de este, un movimiento puede recibir otros bonificadores externos como su **STAB**, entre otros

Una vez determinado el daño, este se modifica por los efectos que correspondan antes de compararse con las Defensas del objetivo, las resistencias, vulnerabilidades y demás modificadores.

#### Precisión
La **Precisión** representa la fiabilidad con la que un Pokémon ejecuta un Movimiento.

Este valor actúa siempre como el **Valor Objetivo** para resolver cualquier acción que requiera una tirada utilizando ese Movimiento, tanto dentro como fuera del combate.

Durante el combate, determina si el Movimiento logra impactar a su objetivo. Fuera del combate, el Director de Juego puede aplicar modificadores al Valor Objetivo cuando el Pokémon utilice el Movimiento de formas distintas a su uso habitual o las circunstancias dificulten su ejecución.
>>>>>>> Stashed changes

___
### Resolver un Movimiento


Cuando un Pokémon utiliza un Movimiento, este puede hacerlo de una de las siguientes maneras:

<<<<<<< Updated upstream
#### 1 - Impacto
se arroja 1d100. Este debe ser menor al valor de **Precisión**. Si es mayor, este falla. Existen [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado\|Problemas de Estado]] del Pokémon que tienen un porcentaje de **evitar que el Pokémon efectúe su movimiento**, siendo los [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado\|Problemas de Estado]]:
=======
- **Uso Estándar.** El Movimiento genera los efectos mencionados en su descripción y se aplica el daño de su **Potencia** con normalidad.

>[!infobox]
>### Modificadores a la Precisión
>|Aplicación del movimiento |Modificador|
>|---|--:|
>| Normal | -35 |
>| Difícil | -55 |
>| Muy Difícil | -75 |
>| Imposible | -95 |

- **Improvisación.** Si se plantea **Improvisar**, el Movimiento se empleará para interactuar con el entorno o producir un efecto distinto al habitual basado en la descripción narrativa del movimiento, ignorando su **Potencia** en caso de tenerla. El Director de Juego aplicará un modificador correspondiente a la **Precisión** en función a la Dificultad que corresponda a lo difícil que sea para el Pokémon aplicar estos efectos como se ve en la tabla **Modificadores a la Precisión**. Luego, se podrá plantear un **Bonificador** a la Precisión igual al **[[Características Pokémon|Bono de Característica]]** del Pokémon que se adecúe mas a la situación.

Es posible combinar ambas aplicaciones en una misma ejecución del Movimiento. En ese caso, el uso se considera un grado más complejo de lo que inicialmente sería según la tabla **Modificadores a la Precisión**, es decir: Si era Normal, pasará a ser Difícil, si era Difícil pasará a ser Muy Difícil y si era Imposible no se podrán combinar.
Si el Movimiento acierta, reducirá a la mitad la cantidad de **Dados de Daño** que otorga su Potencia (mínimo 0) en caso de tenerla. Un movimiento puede generar hasta un efecto a causa de **Improvisar** de manera simultanea.

Una vez decidido, se declara al Director de Juego cómo se planea resolver el movimiento al inicio del turno. Cuando el movimiento es lanzado, este se resuelve en tres etapas. Estas etapas son **Acierto**, **Efectos**, **Respuesta**.

#### 1 - Acierto
se arroja 1d100. Este debe ser menor al valor de **Precisión**. Si es mayor, este falla. Existen [[Problemas de Estado]] del Pokémon que tienen un porcentaje de **evitar que el Pokémon efectúe su movimiento**, siendo los [[Problemas de Estado]]:
>>>>>>> Stashed changes

- ***[[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Mayores/Paralizado\|Paralizado]].*** ([[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Mayores/Problemas de Estado Mayores\|Problema de Estado Mayor]])
- ***[[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Menores/Confundido\|Confundido]] y [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Menores/Enamorado\|Enamorado]]***. ([[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Menores/Problemas de Estado Menores\|Problemas de Estado Menores]])

<<<<<<< Updated upstream
Los [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado\|Problemas de Estado]] que impiden actuar ocupan parte del intervalo de éxito de la [[Barra Pokémon]], comenzando desde el valor de Precisión hacia abajo. Es decir, si la precisión es de 90, y tienen una probabilidad de 30, afectarán los valores del 90 al 30. Si un [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Mayores/Problemas de Estado Mayores\|Problema de Estado Mayor]] y un [[Pokémon/Características Pokémon/Problemas de Estado/Problemas de Estado Menores/Problemas de Estado Menores\|Problema de Estado Menor]] afectan al mismo Pokémon, la [[Barra Pokémon]] de impacto se modifica siempre en el siguiente orden:
=======
Los [[Problemas de Estado]] que impiden actuar ocupan parte del intervalo de éxito de la **[[Barra Pokémon]] de Acierto**, comenzando desde el valor de Precisión hacia abajo. Es decir, si la precisión es de 90, y tienen una probabilidad de 30, afectarán los valores del 90 al 60. Si un [[Problemas de Estado Mayores|Problema de Estado Mayor]] y un [[Problemas de Estado Menores|Problema de Estado Menor]] afectan al mismo Pokémon, la **[[Barra Pokémon]] de Acierto** se modifica siempre en el siguiente orden:
>>>>>>> Stashed changes

**Fallo → Problemas de Estado Menores → Problemas de Estado Mayores → Impacto.**

Un Pokémon solo puede estar afectado por un [[Problemas de Estado Menores|Problema de Estado Menor]] que impida actuar a la vez. Si obtiene uno nuevo, este sustituye al anterior.

**Si el Pokémon no consigue ejecutar el movimiento por uno de estos [[Estado|Estados]] no consume PPs.**

#### 2 - Efectos
<<<<<<< Updated upstream
Después de determinar si el movimiento impacta, realiza una nueva tirada de 1d100 para resolver los efectos del movimiento. Se calcula el daño de la **Potencia** si es que había y se valora la existencia de *Efectos* del [[Pokémon/Movimientos/Movimientos\|Movimiento]] y de los posibles *Efectos* de la [[Habilidades|Habilidad]]. Primero se asignan los intervalos correspondientes a los efectos del Movimiento. Si la Habilidad del Pokémon también puede activar un efecto al impactar, este utilizará los siguientes valores disponibles de la [[Barra Pokémon]].

#### 3 - Respuesta
Si el Pokémon objetivo del movimiento tiene posibilidad de responder a las condiciones que presenta el movimiento enemigo (Ejemplo [[Punto tóxico]] con los movimientos de contacto). Este puede arrojar 1d100 para intentar activar sus efectos.
___
**Notas relacionadas:**
- [[Pokémon/Movimientos/Movimientos de Prioridad/Movimientos de Prioridad\|Movimientos de Prioridad]]
- [[Pokémon/Movimientos/Movimientos de Repetición/Movimientos de Repetición\|Movimientos de Repetición]]
=======
Después de determinar si el movimiento acierta, realiza una nueva tirada de 1d100 para resolver los efectos del movimiento. Se calcula el daño de la **Potencia** si es que había y se valora la existencia de *Efectos* del [[Movimientos|Movimiento]] o los _Efectos_ causados por la **Improvisación** y luego los posibles *Efectos* de la [[Habilidades|Habilidad]]. Primero se asignan los intervalos correspondientes a los efectos del Movimiento. Si la Habilidad del Pokémon también puede activar un efecto al impactar, este utilizará los siguientes valores disponibles de la [[Barra Pokémon]].

#### 3 - Respuesta
Si un Pokémon es objetivo del movimiento, este tiene posibilidad de responder a las condiciones que presenta el movimiento enemigo (Ejemplo [[Punto tóxico]] si el movimiento fue de contacto). Este puede arrojar 1d100 para intentar activar sus efectos.
>>>>>>> Stashed changes

___
**Notas Relacionadas**
- [[Acciones en Combate]]
- [[Características Pokémon]]
- [[Bonificador de Experiencia]]