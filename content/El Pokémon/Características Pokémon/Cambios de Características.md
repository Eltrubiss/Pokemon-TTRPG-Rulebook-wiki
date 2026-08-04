---
tags:
  - Pokemon
---
Los **Cambios de Característica** representan modificaciones temporales sobre las capacidades de un Pokémon durante un combate. Estos efectos suelen ser provocados por [[El Pokémon/Movimientos/Movimientos|Movimientos]], [[El Pokémon/Habilidades/Habilidades|Habilidades]], Objetos u otras reglas especiales, permitiendo que un Pokémon aumente o reduzca temporalmente el rendimiento de una o varias de sus Características.

Los Cambios de Característica **nunca modifican los Valores Base** del Pokémon. En su lugar, alteran temporalmente el **Modificador** de la Característica correspondiente.

Salvo que un efecto indique lo contrario, todos los Cambios de Característica desaparecen cuando el Pokémon regresa a su [[Poké Ball]] o tras un período de descanso suficiente para recuperarse del combate.

### Niveles de Característica
Cada Característica posee un **Nivel de Característica** independiente, que representa cuánto ha sido modificada respecto a su estado normal.

Un Nivel de Característica puede variar entre **−3** y **+3**.

- Un nivel de **0** indica que la Característica no ha sido modificada. Siempre que un Pokémon sea regresado a su Poké Ball, todas sus Características volverán a 0
- Los niveles positivos representan mejoras temporales.
- Los niveles negativos representan reducciones temporales.

Cuando un efecto aumente o disminuya una Característica, su Nivel cambia en la cantidad indicada, sin poder superar nunca los límites de **−3** y **+3**.

### Modificando una Característica

Cada Nivel de Característica modifica el **Modificador** de dicha Característica en una cantidad igual al **[[Reglas Generales/Bonificador de Experiencia|Bonificador de Experiencia]] del Pokémon**.

Supongamos un [[Reglas Generales/Bonificador de Experiencia|BE]] de +2 para los siguientes ejemplos. Un Pokémon con **+2 Niveles de [[El Pokémon/Características Pokémon/Características/Atk|Ataque Físico]]** aumentaría su **Modificador de [[El Pokémon/Características Pokémon/Características/Atk|Ataque Físico]]** en **+4**, mientras que otro con **−1 Nivel de [[El Pokémon/Características Pokémon/Características/SpDef|Defensa Especial]]** reduciría su **Modificador de [[El Pokémon/Características Pokémon/Características/SpDef|Defensa Especial]]** en **−2**.

### Interacción con el Perfil de Combate

Cuando una Característica es modificada, todos los elementos del [[El Pokémon/Características Pokémon/Características Pokémon#Perfil de Combate|Perfil de Combate]] que dependan de ella se actualizan automáticamente. Por ejemplo:

- Un aumento del **[[El Pokémon/Características Pokémon/Características/Atk|Ataque Físico]]** incrementará el daño de los [[El Pokémon/Movimientos/Movimientos|Movimientos]] [[El Pokémon/Movimientos/Clase/Físico|físicos]].

- Una reducción de la **[[El Pokémon/Características Pokémon/Características/Def|Defensa Física]]** disminuirá la [[El Pokémon/Características Pokémon/Perfil de Combate/Guardia|Guardia]] Física y la [[El Pokémon/Características Pokémon/Perfil de Combate/Tiradas de Salvación del Pokémon|Tirada de Salvación]] de Defensa.

- Un aumento de la **[[El Pokémon/Características Pokémon/Características/Vel|Velocidad]]** mejorará la [[El Pokémon/Características Pokémon/Perfil de Combate/Iniciativa del Pokémon|Iniciativa]], el [[El Pokémon/Características Pokémon/Perfil de Combate/Desplazamiento/Desplazamiento|Desplazamiento]] y la [[El Pokémon/Características Pokémon/Perfil de Combate/Tiradas de Salvación del Pokémon|Tirada de Salvación]] de Velocidad.

> [!NOTE]  
> Cada Característica mantiene su propio Nivel de forma independiente. Un Pokémon puede tener, por ejemplo, **+2 Niveles de Ataque**, **−1 Nivel de Defensa Especial** y **+3 Niveles de Velocidad** al mismo tiempo.

### Precisión y Evasión

Además de las seis Características principales, algunos Movimientos y Habilidades pueden modificar temporalmente la **[[El Pokémon/Características Pokémon/Perfil de Combate/Precisión|Precisión]]** o la **[[El Pokémon/Características Pokémon/Perfil de Combate/Evasión|Evasión]]** de un Pokémon. Estos valores utilizan el mismo sistema de niveles que los Cambios de Característica y están sujetos a los mismos límites.

- Cada nivel de Precisión modifica el bonificador a las [[Tiradas de Ataque]] y la [[CD]] de las [[El Pokémon/Características Pokémon/Perfil de Combate/Tiradas de Salvación del Pokémon|Tiradas de Salvación]] provocadas por los Movimientos del Pokémon en una cantidad igual a su **[[Reglas Generales/Bonificador de Experiencia|BE]]**.

- Cada nivel de Evasión modifica las [[El Pokémon/Características Pokémon/Perfil de Combate/Guardia|Guardia]] y las [[El Pokémon/Características Pokémon/Perfil de Combate/Tiradas de Salvación del Pokémon|Tiradas de Salvación]] del Pokémon en una cantidad igual a su **[[Reglas Generales/Bonificador de Experiencia|BE]]**.

### Desplazamiento

Algunos efectos pueden aumentar o reducir la **[[El Pokémon/Características Pokémon/Características/Vel|Velocidad]]** de un Pokémon mediante **[[El Pokémon/Características Pokémon/Cambios de Características|Cambios de Características]]**. Aunque estos cambios modifican la **Velocidad** con normalidad, el **[[El Pokémon/Características Pokémon/Perfil de Combate/Desplazamiento/Desplazamiento|Desplazamiento]]** no se recalcula utilizando el nuevo modificador. En su lugar, el **Desplazamiento** aumenta o disminuye **1 casilla por cada nivel de Velocidad** ganado o perdido. Por ejemplo, si un Pokémon aumenta su **Velocidad** en **2 niveles**, su **Desplazamiento** aumenta en **2 casillas**. Del mismo modo, si reduce su **Velocidad** en **1 nivel**, su **Desplazamiento** disminuye en **1 casilla**.