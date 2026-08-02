---
tags:
  - Pokemon
aliases:
  - Modificador
---
Si hay un rasgo común a todos los Pokémon, son sus **Características**. Estas representan las capacidades físicas y biológicas propias de cada especie y definen aquello en lo que un Pokémon destaca de forma natural. Cada característica posee un **Valor Base** comprendido entre **1 y 255**, el cual permanece inalterable durante toda la vida del Pokémon. Este valor representa el potencial innato de la especie y nunca aumenta al subir de nivel.

En lugar de modificar directamente las características, el progreso de un Pokémon se refleja mediante el **[[Reglas/Bonificador de Experiencia|Bonificador de Experiencia]] (BE)** y su **Perfil de Combate**, un conjunto de valores derivados que determinan cómo actúa el Pokémon durante una batalla, como su **[[Pokémon/Características Pokémon/Perfil de Combate/Guardia|Guardia]]**, sus **[[Pokémon/Características Pokémon/Perfil de Combate/Puntos de Salud Máximos|Puntos de Salud Máximos]]**, sus **[[Pokémon/Características Pokémon/Perfil de Combate/Tiradas de Salvación del Pokémon|Tiradas de Salvación del Pokémon]]** o el daño de sus movimientos.
De este modo, dos Pokémon de la misma especie siempre compartirán las mismas características, pero un ejemplar más experimentado aprovechará mejor ese potencial gracias a su entrenamiento.

### Las 6 Características Pokémon

Todo Pokémon posee seis características fundamentales:

- **Puntos de Salud ([[Pokémon/Características Pokémon/Características/PS|PS]]):** Representan la constitución y vitalidad del Pokémon. Determinan la cantidad de daño que es capaz de soportar antes de quedar debilitado.

- **Ataque Físico ([[Pokémon/Características Pokémon/Características/Atk|Atk]]):** Representa la fuerza y contundencia de los ataques físicos del Pokémon. Cuanto mayor sea esta característica, mayor será el daño que infligen sus movimientos físicos.

- **Ataque Especial ([[Pokémon/Características Pokémon/Características/SpAtk|SpAtk]]):** Representa el dominio del Pokémon sobre las energías elementales y otras manifestaciones especiales. Incrementa el daño de sus movimientos especiales.

- **Defensa Física ([[Pokémon/Características Pokémon/Características/Def|Def]]):** Representa la resistencia del cuerpo del Pokémon frente a golpes, impactos y fuerza bruta. Esta característica determina su **Defensa Activa Física** y su capacidad para resistir efectos físicos.

- **Defensa Especial ([[Pokémon/Características Pokémon/Características/SpDef|SpDef]]):** Representa la resistencia del Pokémon frente a energías, alteraciones mentales y fenómenos especiales. Determina su **Defensa Activa Especial** y su capacidad para resistir efectos especiales.

- **Velocidad ([[Pokémon/Características Pokémon/Características/Vel|Vel]]):** Representa la rapidez de reacción y desplazamiento del Pokémon. Determina su capacidad de movimiento, el orden de actuación en combate y su habilidad para evitar determinados efectos.


---

### Modificadores

Las **Características** rara vez se utilizan directamente durante la partida. En su lugar, cada una de ellas se convierte primero en un **Modificador**, un valor simplificado obtenido mediante la tabla de conversión.

Estos **Modificadores**, combinados con el **[[Reglas/Bonificador de Experiencia|Bonificador de Experiencia]] (BE)**, permiten calcular el **Perfil de Combate** del Pokémon, es decir, todas las estadísticas empleadas durante una batalla, como la **[[Pokémon/Características Pokémon/Perfil de Combate/Guardia|Guardia]]**, las **[[Pokémon/Características Pokémon/Perfil de Combate/Tiradas de Salvación del Pokémon|Tiradas de Salvación]]**, los **[[Pokémon/Características Pokémon/Perfil de Combate/Puntos de Salud Máximos|Puntos de Salud Máximos]]**, la **[[Pokémon/Características Pokémon/Perfil de Combate/Iniciativa del Pokémon|Iniciativa]]** o el **[[Movimiento]]**.
___
### Conversión de Características

>[!infobox]
>### Tabla de Conversión
>
>|Característica Base|Modificador|
>|:-:|:-:|
>|1 – 20|-4|
>|21 – 35|-3|
>|36 – 50|-2|
>|51 – 65|-1|
>|66 – 80|+0|
>|81 – 95|+1|
>|96 – 110|+2|
>|111 – 125|+3|
>|126 – 140|+4|
>|141 – 160|+5|
>|161 – 190|+6|
>|191 – 220|+7|
>|221 – 255|+8|

Las **Características Base** de un Pokémon representan su potencial natural y utilizan la misma escala que los videojuegos, comprendida entre **1 y 255**. Sin embargo, trabajar directamente con estos valores durante una partida resultaría poco práctico.

Por ello, cada característica se convierte a un **Modificador**, un modificador simplificado que representa el rendimiento real de esa característica dentro del sistema.

Este **Modificador** será el utilizado para calcular la mayoría de las mecánicas del juego, como la **Defensa Activa**, el **[[Pokémon/Características Pokémon/Perfil de Combate/Guardia|Guardia]] ño de los movimientos**, las **Tiradas de Salvación** y otros efectos especiales.

#### Utilización

Cada una de las seis características utiliza este mismo procedimiento de conversión. Una vez obtenido el **Modificador**, este se emplea junto al **[[Reglas/Bonificador de Experiencia|Bonificador de Experiencia]] (BE)** para calcular los distintos valores del **Perfil de Combate**.

Por ejemplo, un **[[Pokedex/3- Hoenn/0306 - Aggron|Aggron]]** posee una **[[Pokémon/Características Pokémon/Características/Def|Defensa Física]] Base de 180**. Consultando la tabla, dicha característica corresponde a un **Modificador de +6**.

Si ese [[Pokedex/3- Hoenn/0306 - Aggron|Aggron]] posee un **[[Reglas/Bonificador de Experiencia|BE]] de +2**, su **[[Pokémon/Características Pokémon/Perfil de Combate/Guardia|Guardia]] Física** será:

**[[Pokémon/Características Pokémon/Perfil de Combate/Guardia|Guardia]] Física = 8 + BE + Modificador de [[Pokémon/Características Pokémon/Características/Def|Defensa Física]]**

**[[Pokémon/Características Pokémon/Perfil de Combate/Guardia|Guardia]] Física = 8 + 2 + 6 = 16**

Del mismo modo, un **[[Pokedex/2- Jotho/0242 - Blissey|Blissey]]** posee una **[[Pokémon/Características Pokémon/Características/Def|Defensa Física]] Base de 10**, lo que equivale a un **Modificador de [[Pokémon/Características Pokémon/Características/Def|Defensa Física]] de -4**. Con el mismo **[[Reglas/Bonificador de Experiencia|BE]] +2**, su **[[Pokémon/Características Pokémon/Perfil de Combate/Guardia|Guardia]] Física** sería **6**, reflejando que su resistencia proviene de su enorme cantidad de [[Pokémon/Características Pokémon/Características/PS|Puntos de Salud]] y no de su capacidad para bloquear o absorber impactos.

> [!summary] **Resumen**  
> **Características** → Valores Base entre **1 y 255** que representan el potencial natural de un Pokémon.
> 
> **Modificadores** → Valores entre **−4 y +8** obtenidos mediante la tabla de conversión.
> 
> **Perfil de Combate** → Conjunto de estadísticas derivadas [[Pokémon/Características Pokémon/Perfil de Combate/Guardia|Guardia]], TS, PS Máximos, Movimiento, Iniciativa, etc.) calculadas a partir de los **Modificadores** y el **Bonificador de Experiencia**.

___
### Perfil de Combate
El **Perfil de Combate** reúne todos los valores que un Pokémon utiliza durante un enfrentamiento. A diferencia de las **Características**, que representan las capacidades innatas de una especie, el Perfil de Combate refleja cómo ese potencial se traduce en las mecánicas del juego.

Todos los valores del Perfil de Combate se obtienen combinando el **Modificador** de una o varias características con el **[[Reglas/Bonificador de Experiencia|Bonificador de Experiencia]] (BE)** del Pokémon.

Mientras que las **Características** permanecen inalterables durante toda la vida del Pokémon, su **Perfil de Combate** evoluciona a medida que gana experiencia y aumenta de nivel.

Las estadísticas que componen el Perfil de Combate son las siguientes:

- **[[Pokémon/Características Pokémon/Perfil de Combate/Puntos de Salud Máximos|Puntos de Salud Máximos]] (PS Máx):** Representan la cantidad de daño que un Pokémon puede soportar antes de quedar debilitado.
- **[[Pokémon/Características Pokémon/Perfil de Combate/Guardia|Guardia]]:** Representa la dificultad para herir eficazmente al Pokémon. Se divide en **[[Pokémon/Características Pokémon/Perfil de Combate/Guardia|Guardia]] Física** y **[[Pokémon/Características Pokémon/Perfil de Combate/Guardia|Guardia]] Especial**, dependiendo del tipo de movimiento recibido.
- **[[Pokémon/Características Pokémon/Perfil de Combate/Tiradas de Salvación del Pokémon|Tiradas de Salvación]] (TS):** Reflejan la capacidad del Pokémon para resistir efectos que no dependen únicamente de un impacto directo. Existen tres Tiradas de Salvación: **Defensa Física**, **Defensa Especial** y **Velocidad**.
- **[[Movimiento]]:** Determina la distancia que el Pokémon puede recorrer durante su turno.
- **[[Pokémon/Características Pokémon/Perfil de Combate/Iniciativa del Pokémon|Iniciativa]]:** Determina el orden en el que los Pokémon actúan durante un combate.