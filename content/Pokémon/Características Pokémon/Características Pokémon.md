---
tags:
  - Pokemon
aliases:
  - Característica NVL
  - Características NVL
  - Característica BASE
  - Características BASE
---
> [!infobox]
> ## Comparación Rango / Categoría
> |   Rango   | Categoría  |
> | :-------: | --------- |
> | 155 - 255 | Sobrenatural   |
> | 120 - 150 | Excelente   |
> | 80 - 115  | Sólido     |
> |  50 - 75  | Mediocre   |
> |  25 - 45  | Deficiente |
> |  1 - 20   | Inútil     |

Si hay un común denominador en todos los Pokémon, esas son sus **Características**. Son la base para comprender su biología y sus capacidades. Cada una de las **Características** de un Pokémon se cuantifica en un valor del 1 al 255, separándolas en categorías como se muestra en la tabla **Comparación Rango/Categoría**

### Las 6 Características Pokémon
Las características de los Pokémon son las siguientes:

- **[[Pokémon/Características Pokémon/Características/PS\|Puntos de Salud]]:** Los Puntos de Salud de un Pokémon representan su constitución y vitalidad. Hablan de cuánto un Pokémon puede mantener trabajos constantes o cuanto daño en combate pueden recibir.

- **[[Pokémon/Características Pokémon/Características/Atk\|Ataque Físico]]:**

- **[[Pokémon/Características Pokémon/Características/SpAtk\|Ataque Especial]]:**

- **[[Pokémon/Características Pokémon/Características/Def\|Defensa Física]]:** La Defensa Física de un Pokémon se refiere a la resistencia del mismo y su capacidad de lidiar con situaciones de golpes, caídas y fuerza bruta. Es su capacidad de menguar el daño [[Físico]] recibido en combate.

- **[[Pokémon/Características Pokémon/Características/SpDef\|Defensa Especial]]:** La Defensa Especial de un Pokémon se refiere a su "aislante" contra lo intangible. Representa su estabilidad mental y la capacidad del cuerpo para disipar energías externas sin que alteren el equilibrio del Pokémon. Es su capacidad de menguar el daño [[Especial]] recibido en combate.

- **[[Pokémon/Características Pokémon/Características/Vel\|Velocidad]]:** La Velocidad de un Pokémon se refiere a su velocidad de reacción y de acción, un Pokémon con gran velocidad será un Pokémon ágil y despierto, mientras que un Pokémon de menor velocidad será un Pokémon lento y poco reactivo. Es lo que define qué tan rápido actuará el Pokémon en combate.

___
### Características Base vs. Características de Nivel

Para entender el crecimiento de un Pokémon, debemos distinguir entre dos conceptos:

1.  **Características Base (BASE):** Es el valor inherente a la especie. Representa el potencial genético de un Pokémon (por ejemplo, todos los [[Pokedex/2- Jotho/Heracross\|Heracross]] comparten las mismas bases). Este valor **nunca cambia**, independientemente del nivel, y sirve como punto de partida para todos los cálculos.
2.  **Características de Nivel (NVL) :** Es el valor real que posee el Pokémon en su nivel actual. Este número es el que aumenta cada vez que el Pokémon sube de nivel y es el que utilizaremos para calcular los **Bonificadores**.

Si una [[Habilidades|Habilidad]] o [[Dev/Plantillas/Movimiento\|Movimiento]] alteran las **Características NVL** sumándole o restándole un porcentaje de la misma, el cálculo siempre se redondea hacia abajo.

#### La Fórmula de Crecimiento
Para determinar la **Característica de Nivel (NVL)** de un Pokémon, aplicamos la siguiente fórmula utilizando su Base y su [[Pokémon/Nivel Pokémon\|Nivel Pokémon]]:

$$ \text{Característica Actual} = \frac{\text{Base} \cdot \text{Nivel}}{10} + 5 $$

> [!example] **Ejemplo de progresión: [[Pokedex/2- Jotho/Heracross\|Heracross]] (Ataque Base: 125)**
> - **A Nivel 1:** $\frac{125 \cdot 1}{10} + 5 = 17,5$ (Se convierte en **17**)
> - **A Nivel 10:** $\frac{125 \cdot 10}{10} + 5 = 130$
> - **A Nivel 20:** $\frac{125 \cdot 20}{10} + 5 = 255$

---

### Bonificadores de Características
Los **Bonificadores** son valores simplificados que derivan de las características **NVL** del Pokémon. Mientras que la característica representa el potencial total, el bonificador es el número práctico que sumarás a tus dados o usarás para determinar efectos en combate.

#### Cómo calcular el Bonificador

Para obtener el bonificador de cualquier característica, divide el valor actual entre 10 y redondea el resultado al entero más cercano (de 0,5 hacia arriba).

**Fórmula:**  
$$
\text{Bonificador} = \text{Redondear} \left( \frac{\text{Característica NVL}}{10} \right)
$$

- **Ejemplo:** Un [[Pokedex/2- Jotho/Heracross\|Heracross]] de Nivel 1 tiene un [[Pokémon/Características Pokémon/Características/Atk\|Ataque Físico]] de 17.
- **Cálculo:** .
- **Resultado:** Al redondear 1,7, el **Bonificador de Ataque** es **2**.

#### Utilidad de los Bonificadores

Cada bonificador tiene un propósito específico dentro de las mecánicas de juego:

| Bonificador             | Uso Principal                                                                            |
| :---------------------- | :--------------------------------------------------------------------------------------- |
| **[[Pokémon/Características Pokémon/Características/Atk\|Atk]] / [[Pokémon/Características Pokémon/Características/SpAtk\|SpAtk]]** | Se suman a la [[Acción de Movimiento]] para determinar el éxito y potencia de un ataque. |
| **[[Pokémon/Características Pokémon/Características/Def\|Def]] / [[Pokémon/Características Pokémon/Características/SpDef\|SpDef]]** | Se utilizan al [[Protegerse]] para reducir el daño recibido según el tipo de movimiento. |
| **[[Pokémon/Características Pokémon/Características/Vel\|Vel]]**             | Determina el [[Reglas/Combate/Orden de Iniciativa\|Orden de Iniciativa]] del Pokémon.                                        |

---

### Puntos de Salud Máximos (PS Máx)

A diferencia de las otras estadísticas, los **[[Pokémon/Características Pokémon/Características/PS\|Puntos de Salud Máximos]]** no funcionan como un bonificador de tirada, sino como la reserva de energía vital del Pokémon.

- **Cálculo:** Los [[Pokémon/Características Pokémon/Características/PS\|PS Máximos]] equivalen a la **mitad** de la característica de [[Pokémon/Características Pokémon/Características/PS\|Puntos de Salud]].
- **Función:** Representan la cantidad de daño que el Pokémon puede tolerar antes de caer [[debilitado]].

