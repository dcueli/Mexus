<p align="center"><img src="../../../docs/baseline/03_brand_guidelines/logo/logo-mexus-for-docs.png" alt="Mexus Logo" width="600"/></p>
<h1 align="center">Mexus</h1>
<p align="center"><strong>Para tu seguridad, tu registro de llamadas</strong></p>
<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/Version-2.1.0-blue?style=for-the-badge" alt="Version">
</p>

# Español [es] - Índice de documentación
<p align="right">Español | <a href="#english-en--documentation-index">English</a></p>

## Índice:
1\. Inicio del proyecto <br>
&nbsp; 1.1 Visión y Alcance **\[1]** <br>
&nbsp; 1.2 Caso de Negocio (Business case) **\[2]** <br>
&nbsp; 1.3 Acta de Constitución (Project charter) **\[3]** <br>
&nbsp; 1.4 Stakeholder \& Roles (simplificado)

2\. Requisitos y producto <br>
&nbsp; 2.1 SRS / Especificación de Requisitos de Software **\[4]** <br>
&nbsp; 2.2 Product Vision \& Roadmap (PO)
&nbsp; 2.3 Product Backlog (en Jira)

3\. Diseño y arquitectura <br>
&nbsp; 3.1 Documento de Arquitectura de Software (Software Architecture Document) **\[5]** <br>
&nbsp; 3.2 Diagramas (UML / flujos)

4\. Planificación, ejecución y calidad <br>
&nbsp; 4.1 Plan de Proyecto / Plan de Fases **\[7]** <br>
&nbsp; 4.2 Plan de Gestión Ágil (Agile Management Guide with Scrum/Kanban) **\[8]** <br>
&nbsp; 4.3 Plan de Pruebas / Estrategia de Testing (Testing plan) **\[6]** <br>
&nbsp; 4.4 Registro de Riesgos (Risk Register) **\[9]** <br>
&nbsp; 4.5 SLA / SLO (Service Level Agreement, adaptado)

5\. Operación y cierre <br>
&nbsp; 5.1 Manual de Usuario (aunque seas tú) <br>
&nbsp; 5.2 Manual Técnico / Guía de despliegue <br>
&nbsp; 5.3 Registro de Versiones / Release Notes <br>
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
* ***justificación (por qué),***
* ***alcance alto nivel,***
* ***roles,***
* ***resumen de riesgos y presupuesto ficticio.***

Formaliza el problema que resuelve, qué beneficios y riesgos tiene, y qué criterios de éxito.
Objetivos, alcance alto nivel, hitos clave, estimación de esfuerzo, rol.

### 1.3 Stakeholder \& Roles (simplificado)
Dejar definido qué roles se desempeñan en el proyecto PM, PO, arquitecto, desarrollador y QA, cliente.

## 2\. Requisitos y producto
### 2.1 SRS / Especificación de Requisitos de Software **\[3]**
***Los IFR\_XX y INFR\_XX detallados, funcionales + no funcionales.***
Introducción, visión, requisitos funcionales y no funcionales (IFR\_XX), INFR\_XX), restricciones de sistema.

### 2.2 Product Vision \& Roadmap (PO)
Visión de producto a medio plazo y un roadmap: 0.1.0 (MVP), 0.2.0, 0.3.0… con los temas grandes de cada versión.

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
Gantt: fases (análisis, desarrollo, pruebas, etc.), fechas estimadas, hitos de versión.

### 4.2 Plan de Gestión Ágil (Agile Management Guide with Scrum/Kanban) **\[6]**
* ***cómo usar Jira,***
* ***columnas del tablero,***
* ***duración de sprints,***
* **_definición de “Done”_.**

Cómo se usará Jira: definición de columnas, definición de sprint, cadencia, definición de “Done” (qué significa que una tarea esté terminada: código, pruebas, doc actualizada).

### 4.3 Plan de Pruebas / Estrategia de Testing (Testt plan) **\[7]**
***Qué se va a probar en 0.1.0, criterios de aceptación básicos.***
* Qué se va a probar para la  v0.1.0: 
* escenarios básicos de llamada, 
* errores de permisos, etc., 
* y cómo documentar resultados.

### 4.4 Registro de Riesgos (Risk Register) **\[8]**
Lista de riesgos técnicos (Android 10+ y APIs de grabación), legales (privacidad), y de calendario, con probabilidad, impacto y mitigaciones.

### 4.5 SLA / SLO (Service Level Agreement, adaptado)
***“Compromisos” con los stakeholders: tiempos objetivo para corregir bugs, backups, etc.***
“SLA interno”: 
* objetivos de disponibilidad, 
* tiempos objetivos para corregir bugs críticos, 
* políticas de backup de tus proyectos, 
* etc.

## 5\. Operación y cierre
### 5.1 Manual de Usuario (aunque seas tú)
Qué hace la app, cómo se configura, qué opciones tiene.

### 5.2 Manual Técnico / Guía de despliegue
Cómo compilar Mexus, cómo generar el APK, cómo instalarlo en un dispositivo, prerequisitos.

### 5.3 Registro de Versiones / Release Notes
Para cada versión (0.1.0, 0.2.0, …), un pequeño changelog: qué se añadió, qué se cambió, qué se corrigió.

### 5.4 Retrospectiva: Lecciones aprendidas, Post‑mortem de sprint o versión
Como PM/PO/SM: qué ha funcionado, qué podría mejorarse en el siguiente ciclo.


# English [en] – Documentation index
<p align="right"><a href="#español-es---índice-de-documentación">Español</a> | English</p>

## Index:
1\. Project initiation <br>
&nbsp; 1.1 Vision and Scope **[1]** <br>
&nbsp; 1.2 Business Case **[2]** <br>
&nbsp; 1.3 Project Charter **[3]** <br>
&nbsp; 1.4 Stakeholders & Roles (simplified)

2\. Requirements and product <br>
&nbsp; 2.1 SRS / Software Requirements Specification **[4]** <br>
&nbsp; 2.2 Product Vision & Roadmap (PO) <br>
&nbsp; 2.3 Product Backlog (in Jira)

3\. Design and architecture <br>
&nbsp; 3.1 Software Architecture Document **[5]** <br>
&nbsp; 3.2 Diagrams (UML / flows)

4\. Planning, execution and quality <br>
&nbsp; 4.1 Project Plan / Phase Plan **[7]** <br>
&nbsp; 4.2 Agile Management Plan (Agile Management Guide with Scrum/Kanban) **[8]** <br>
&nbsp; 4.3 Test Plan / Testing Strategy **[6]** <br>
&nbsp; 4.4 Risk Register **[9]** <br>
&nbsp; 4.5 SLA / SLO (adapted Service Level Agreement)

5\. Operation and closure <br>
&nbsp; 5.1 User Manual (even if the user is you) <br>
&nbsp; 5.2 Technical Manual / Deployment Guide <br>
&nbsp; 5.3 Version Log / Release Notes <br>
&nbsp; 5.4 Lessons Learned / Sprint or Release Post‑mortem

# ***Documentation development order***

1. Vision and Scope (why the project exists, Vision & Scope).
2. Project Charter (authorization, Project Charter).
3. Business Case (economic justification, Business Case).
4. Software Requirements Specification (what it must do, Software Requirements Specification – SRS).
5. Software Architecture Document (how it is designed, Software Architecture Document – SAD).
6. Test Plan (how it is validated, Testing Plan).
7. Traceability Matrix (how everything is connected, Traceability Matrix).
8. Project Plan (how it is executed, Project Plan):
   - Gantt chart,
   - effort per phase,
   - and fictitious budget.
9. Agile Management Guide (how the work is organized with Scrum/Kanban in Jira, sprints, DoD; Agile Management Guide).
10. Risk Register (what can go wrong, Risk Register).
11. Internal SLA (how it is operated and maintained, Service Level Agreement).
12. As you approach 0.1.0, Manuals (how it is used and maintained technically):
   - Technical Manual.
   - User Manual.

## 1. Project initiation
### 1.1 Vision and Scope document **[1]**
What Mexus is, why it exists, goals, user types, and boundaries of what is in and out of scope.

### 1.2 Project Charter + Business Case **[2]**
* ***project objectives,***
* ***justification (why),***
* ***high‑level scope,***
* ***roles,***
* ***summary of risks and fictitious budget.***

It formalizes the problem being solved, the benefits and risks, and the success criteria.
Objectives, high‑level scope, key milestones, effort estimate, role.

### 1.3 Stakeholders & Roles (simplified)
Define which roles are played in the project: PM, PO, architect, developer and QA, client.

## 2. Requirements and product
### 2.1 SRS / Software Requirements Specification **[3]**
***Detailed IFR_XX and INFR_XX, functional + non‑functional.***
Introduction, vision, functional and non‑functional requirements (IFR_XX, INFR_XX), system constraints.

### 2.2 Product Vision & Roadmap (PO)
Medium‑term product vision and a roadmap: 0.1.0 (MVP), 0.2.0, 0.3.0… with the main themes of each release.

### 2.3 Product Backlog (in Jira)
Prioritized list of user stories, technical tasks, bugs, spikes, etc., derived from the IFR_XX.

## 3. Design and architecture
### 3.1 Software Architecture Document **[4]**
***Based on the SRS: defines modules, layers, plugins, basic flows.***

High‑level view: modules, layers (Angular UI, Capacitor, Java plugins), simple diagrams of call and recording flows, key technical decisions.

### 3.2 Diagrams (UML / flows)
Sequence diagrams for the call → plugin → recording flow, component diagrams, etc., to practice the SA (Software Architect) side.

## 4. Planning, execution and quality
### 4.1 Project Plan / Phase Plan **[5]**
* ***phases (analysis, development, testing, etc.),***
* ***high‑level Gantt,***
* ***tentative release calendar,***
* ***estimated budget and distribution by phases / “departments”.***
Gantt: phases (analysis, development, testing, etc.), estimated dates, release milestones.

### 4.2 Agile Management Plan (Agile Management Guide with Scrum/Kanban) **[6]**
* ***how to use Jira,***
* ***board columns,***
* ***sprint length,***
* ***definition of “Done”.***

How Jira will be used: column definitions, sprint definition, cadence, definition of “Done” (what it means for a task to be finished: code, tests, updated docs).

### 4.3 Test Plan / Testing Strategy **[7]**
***What will be tested in 0.1.0, basic acceptance criteria.***
* What will be tested for v0.1.0:  
* basic call scenarios,  
* permission error cases, etc.,  
* and how to document results.

### 4.4 Risk Register **[8]**
List of technical risks (Android 10+ and recording APIs), legal risks (privacy), and schedule risks, with probability, impact and mitigations.

### 4.5 SLA / SLO (adapted Service Level Agreement)
***“Commitments” with stakeholders: target times to fix bugs, backups, etc.***
“Internal SLA”:
* availability objectives,
* target times to fix critical bugs,
* backup policies for your projects,
* etc.

## 5. Operation and closure
### 5.1 User Manual (even if the user is you)
What the app does, how to configure it, what options it has.

### 5.2 Technical Manual / Deployment Guide
How to build Mexus, how to generate the APK, how to install it on a device, prerequisites.

### 5.3 Version Log / Release Notes
For each version (0.1.0, 0.2.0, …), a short changelog: what was added, what was changed, what was fixed.

### 5.4 Retrospective: Lessons learned, Sprint or Release Post‑mortem
As PM/PO/SM: what worked well, what could be improved in the next cycle.
