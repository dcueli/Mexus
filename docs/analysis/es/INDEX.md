<p align="right">Español | <a href="../en/INDEX.md">English</a></p>

<p align="center"><img src="../../brand_guidelines/logo/logo-mexus-for-docs.png" alt="Mexus Logo" width="600"/></p>
<h1 align="center">Mexus</h1>
<p align="center"><strong>Para tu seguridad, tu registro de llamadas</strong></p>
<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/Version-2.1.0-blue?style=for-the-badge" alt="Version">
</p>

# Índice de documentación
## Índice:

1\. Inicio del proyecto

&nbsp; 1.1 Visión y Alcance **\[1]**

&nbsp; 1.2 Caso de Negocio (Business case) **\[2]**

&nbsp; 1.3 Acta de Constitución (Project charter) **\[3]**

&nbsp; 1.4 Stakeholder \& Roles (simplificado)

2\. Requisitos y producto

&nbsp; 2.1 SRS / Especificación de Requisitos de Software **\[4]**

&nbsp; 2.2 Product Vision \& Roadmap (PO)

&nbsp; 2.3 Product Backlog (en Jira)

3\. Diseño y arquitectura

&nbsp; 3.1 Documento de Arquitectura de Software (Software Architecture Document) **\[5]**

&nbsp; 3.2 Diagramas (UML / flujos)

4\. Planificación, ejecución y calidad

&nbsp; 4.1 Plan de Proyecto / Plan de Fases **\[7]**

&nbsp; 4.2 Plan de Gestión Ágil (Agile Management Guide with Scrum/Kanban) **\[8]**

&nbsp; 4.3 Plan de Pruebas / Estrategia de Testing (Testing plan) **\[6]**

&nbsp; 4.4 Registro de Riesgos (Risk Register) **\[9]**

&nbsp; 4.5 SLA / SLO (Service Level Agreement, adaptado)

5\. Operación y cierre

&nbsp; 5.1 Manual de Usuario (aunque seas tú)

&nbsp; 5.2 Manual Técnico / Guía de despliegue

&nbsp; 5.3 Registro de Versiones / Release Notes

&nbsp; 5.4 Lecciones aprendidas / Post‑mortem de sprint o versión

# ***Orden de desarrollo de documentación***

1. Visión y Alcance (por qué existe el proyecto, Vision & Scope).
2. Acta de Constitución (autorización, Project Charter).
3. Caso de Negocio (justificación económica, Business Case).
4. Especificación de Requisitos del Software (qué debe hacer, Software Requirement Specification SRS).
5. Documento de Arquitectura de Software (cómo está diseñado, Software Architecture Document SAD).
6. Plan de Pruebas (cómo se valida, Testing Plan).
7. Matriz de trazabilidad (cómo se conecta todo, Traceability Matrix).
8. Plan de Proyecto (cómo se ejecuta, Project Plan):
- Gantt,
- esfuerzo por fases,
- y presupuesto ficticio.
9. Guía de Gestión Ágil (cómo se organiza el trabajo con Scrum/Kanban Jira, sprints, DoD; Agile Management Guide).
10. Registro de Riesgos (qué puede salir mal, Risk Register).
11. SLA interno (cómo se opera y mantiene, Acuerdo de Nivel de Servicio/Service Level Agreement).
12. Al acercarte a 0.1.0, Manuales (cómo se usa y mantiene técnicamente):
- Manual Técnico (Technical Manual).
- Manual de Usuario (User Manual).

## 1\. Inicio del proyecto

### 1.1 Documento de Visión y Alcance (Visión \& Scope) **\[1]**

Qué es Mexus, para qué existe, objetivos, tipo de usuario, límites de lo que entra y no entra.

### 1.2 Acta de Constitución + Caso de Negocio (Project charter \& Business case) **\[2]**

* ***objetivos del proyecto,***
* ***justificación (por qué vale la pena),***
* ***alcance alto nivel,***
* ***roles (tus “sombreros”),***
* ***resumen de riesgos y presupuesto ficticio.***

Aunque Mexus sea personal, formaliza: problema que resuelve, beneficios, riesgos y criterios de éxito.

Objetivos, alcance alto nivel, hitos clave, estimación de esfuerzo, rol del “equipo” (tú como PM/PO/Dev), y un resumen muy simple de fechas y recursos.

### 1.3 Stakeholder \& Roles (simplificado)

En tu caso: dejar por escrito que tú eres PM, PO, arquitecto, desarrollador y QA, para practicar el esquema profesional.

## 2\. Requisitos y producto

### 2.1 SRS / Especificación de Requisitos de Software **\[3]**

***Aquí van tus IRF\_XX detallados, funcionales + no funcionales.***

Es justo el documento que estamos montando: introducción, visión, requisitos funcionales y no funcionales (tus IRF\_XX), restricciones de sistema.

### 2.2 Product Vision \& Roadmap (PO)

Visión de producto a medio plazo (más allá de 0.1.0) y un roadmap simple: 0.1.0 (MVP), 0.2.0, 0.3.0… con los temas grandes de cada versión.

### 2.3 Product Backlog (en Jira)

Lista priorizada de historias de usuario, tareas técnicas, bugs, spikes, etc., derivada de los IRF\_XX.

## 3\. Diseño y arquitectura

### 3.1 Documento de Arquitectura de Software (Software Architecture Document) **\[4]**

***Basado en la SRS: define módulos, capas, plugins, flujos básicos.***

Vista de alto nivel: módulos, capas (UI Angular, Capacitor, plugins Java), diagramas simples de flujo de llamadas y grabación, decisiones técnicas clave.

### 3.2 Diagramas (UML / flujos)

Diagramas de secuencia para el flujo llamada→plugin→grabación, diagramas de componentes, etc., para practicar la parte de SA (Software Architect).

## 4\. Planificación, ejecución y calidad

### 4.1 Plan de Proyecto / Plan de Fases **\[5]**

* ***fases (análisis, desarrollo, pruebas…),***
* ***Gantt a alto nivel,***
* ***calendario orientativo de versiones,***
* ***presupuesto estimado y distribución por fases/“departamentos”.***

Aquí entra tu Gantt: fases (análisis, desarrollo, pruebas, etc.), fechas estimadas, hitos de versión.

### 4.2 Plan de Gestión Ágil (Agile Management Guide with Scrum/Kanban) **\[6]**

* ***cómo usar Jira,***
* ***columnas del tablero,***
* ***duración de sprints,***
* <i>**definición de “Done”.**</i>

Cómo vas a usar Jira: definición de columnas, definición de sprint, cadencia, definición de “Done” (qué significa que una tarea esté terminada: código, pruebas, doc actualizada).

### 4.3 Plan de Pruebas / Estrategia de Testing (Testt plan) **\[7]**

***Qué se va a probar en 0.1.0, criterios de aceptación básicos.***

Qué vas a probar para 0.1.0: escenarios básicos de llamada, errores de permisos, etc., y cómo documentar resultados (aunque sea en una tabla simple).

### 4.4 Registro de Riesgos (Risk Register) **\[8]**

Lista de riesgos técnicos (Android 10+ y APIs de grabación), legales (privacidad), y de calendario, con probabilidad, impacto y mitigaciones.

### 4.5 SLA / SLO (Service Level Agreement, adaptado)

***Son los “compromisos” con los stakeholders (contigo): tiempos objetivo para corregir bugs, backups, etc.***

Aunque no tengas clientes, puedes documentar tu “SLA personal”: objetivos de disponibilidad, tiempos objetivos para corregir bugs críticos, políticas de backup de tus proyectos, etc.

## 5\. Operación y cierre

### 5.1 Manual de Usuario (aunque seas tú)

Qué hace la app, cómo se configura, qué opciones tiene.

### 5.2 Manual Técnico / Guía de despliegue

Cómo compilar Mexus, cómo generar el APK, cómo instalarlo en un dispositivo, prerequisitos.

### 5.3 Registro de Versiones / Release Notes

Para cada versión (0.1.0, 0.2.0, …), un pequeño changelog: qué se añadió, qué se cambió, qué se corrigió.

### 5.4 Lecciones aprendidas / Post‑mortem de sprint o versión

Como PM/PO/SM de ti mismo: qué ha funcionado, qué mejorarías en el siguiente ciclo.
