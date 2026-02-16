<p align="center"><img src="../docs/baseline/03_brand_guidelines/logo/logo-mexus-for-docs.png" alt="Mexus Logo" width="600"/></p>
<p align="center"><strong>Mexus</strong>, <i>Para tu seguridad, tu registro de llamadas</i></p>
<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/Version-2.1.0-blue?style=for-the-badge" alt="Version">
</p>

# Español [es] - Índice de documentación
<p align="right">Español | <a href="#english-en--documentation-index">English</a></p>

# Política de Gestión Documental
## Propósito
Esta política define las reglas de creación, versionado, aprobación, almacenamiento y archivo de la documentación, con el objetivo de:

- Garantizar trazabilidad.
- Evitar el uso de versiones obsoletas.
- Mantener coherencia entre artefactos.
- Facilitar auditoría y reconstrucción histórica.
- Se inspira en buenas prácticas de gestión documental y gestión de configuración (**ISO 9001**, **ISO 10007**).

## Estados documentales
### Alineados con ISO 9001 y gestión de documentasción
#### Estados documentales comunes

1.  Draft
2.  Working
3.  Wip (Work In Progress)
4.  In Progress
5.  In Review
6.  Approved
7.  Released
8.  Baseline
9.  Obsolete
10. Archived

Los documentos puedrán encontrarse en uno y solo uno de los siguientes estados:
- Draft → En edición.
- In Review → En revisión formal.
- Approved → Aprobado y vigente (ubicado en /baseline).
- Archived → Sustituido u obsoleto (ubicado en /archive).


## Estructura de directorios
La documentación del proyecto se organizará siempre bajo un directorio dentro del directorio raíz del proyecto indicando de forma clara en le nombre qué es y cuál es su utilidad.

### Ubicación documental principal
La documentación del proyecto se organizará siempre bajo el directorio:
`/docs`

La documentación siempre será traducida, en la medida de lo posible, bajo el directorio correspondiente al **código de idioma**  según la norma **ISO 639-1**.
En ningún caso se usará el código de país como se recoje en la norma _ISO 3166-1 alpha-2_.

Ejemplo:
```
/docs/[*.*]
  ├── /es
  └── /pt
```

## Documentación en edición `/draft`
De los estados documentales comunes, para la documentación en elaboración o revisión, los archivos serán ubicados bajo el directorio `/draft`.

```
/docs/draft
  ├── /docs/draft/01_conventions/es
  ├── /docs/draft/01_conventions/pt
  |
  ├── /docs/draft/01_conventions/...
  ├── /docs/draft/01_conventions/[other languages code]
  ├── /docs/draft/01_conventions/...
  |
  └── /docs/draft/01_conventions/it
```

Características:
- Podrán modificarse libremente siempre por el personal cualificado y designado para la tarea.
- No se considerarán oficiales.
- No se putilizarán como referencia contractual o de aceptación.

## Documentación oficial aprobada (ISO 10007) `/baseline`
Contiene versiones aprobadas y vigentes de la documentación en edición ya revisada y aprobada.
Los archivos estarán ubicado ubicados bajo el directorio `/baseline` y sólo se aceptarán archivos con extensión **[filename].PDF**.

```
/docs/draft
  ├── /docs/baseline/01_conventions/es
  ├── /docs/baseline/01_conventions/pt
  ├── /docs/baseline/02_analysis/es
  ├── /docs/baseline/02_analysis/pt
  |
  ├── /docs/baseline/03_brand_guidelines/...
  ├── /docs/baseline/03_brand_guidelines/[other languages code]
  ├── /docs/baseline/03_brand_guidelines/...
  |
  └── /docs/baseline/03_brand_guidelines/pt
```

Características:
- Representan la versión oficial del documento.
- Sirven como referencia para desarrollo, pruebas y gestión.
- Solo se actualizan mediante incremento de versión formal.
- Una vez un documento entra en /baseline, se considera controlado.
- Todo el personal tendrá acceso (sólo lectura) a la documentación aquí ubicada.

## Documnentación oficial sustituido u Obsoleto `/archive`
Contiene documentos sustituidos u obsoletos.
Los archivos serán ubicado ubicados bajo el directorio `/archive`.

```
/docs/archived
  ├── /docs/archived/[año]/01_conventions/es
  ├── /docs/archived/[año]/02_analysis/es
  ├── /docs/archived/[año]/03_brand_guidelines/es
  |
  ├── /docs/archived/Obsolete/[año]/01_conventions/es
  ├── /docs/archived/Obsolete/[año]/02_analysis/es
  |
  ├── /docs/archived/Obsolete/[año]/02_analysis/...
  ├── /docs/archived/Obsolete/[año]/02_analysis/[other languages code]
  ├── /docs/archived/Obsolete/[año]/02_analysis/...
  |
  └── /docs/archived/Obsolete/[año]/03_brand_guidelines/es
```

Características:
- No son vigentes.
- Se conservan por trazabilidad histórica.
- No deben ser modificados.
- No deben utilizarse como referencia operativa.

## Versionado

Se utiliza versionado semántico simplificado:
- 0.x → versiones preliminares.
- 1.0.0 → primera versión aprobada.
- Incremento mayor (2.0.0, 3.0.0, x.0.0…) → cambios estructurales o redefinición importante.
- Incremento menor (1.1.0, 1.2.0, x.y.0…) → mejoras o ampliaciones.
- Incremento de revisión (1.0.1, 1.0.2, x.y.z…) → correcciones menores.

Cada documento debe incluir:
- Nombre de proyecto
- Nombre del documento.
- Número de versión.
- Estado (Draft / Approved / Archived).

## Nomenclatura de archivos
Únicamente para los documentos ubicados en /docs/draft: <br>
`[Project]_[DocumentNameOrType]_[Version]_[Status].[extension]`

Únicamente para los documentos ubicados en /docs/baseline: <br>
`[Project]_[DocumentNameOrType]_[Version].[extension]`

*_Ejemplo_* <br>
`_Mexus_SRS-Software-Requirement-Specification_v1.0_InReview.[ext]_`

```
/docs
  ├── /draft/02_analysis/es/Mexus_SRS-Software-Requirement-Specification_v0.1.docx
  ├── /baseline/02_analysis/es/Mexus_SRS-Software-Requirement-Specification_v1.2.4.pdf
  ├── /archive/2026/02_analysis/es/Mexus_SRS-Software-Requirement-Specification_v1.2.1.pdf
  └── /archive/Obsolete/2025/02_analysis/es/Mexus_SRS-Software-Requirement-Specification_v1.0.0.pdf
```

## Aprobación
Un documento se considera aprobado cuando:
- Se ha completado su contenido conforme a su índice definido.
- Se ha revisado su coherencia con los artefactos relacionados.
- Se ha registrado su estado como “Approved”.
- Se ha movido al directorio /baseline.

La aprobación implica que el documento pasa a formar parte de la configuración controlada del proyecto.

## Sustitución y archivo
Cuando un documento aprobado es reemplazado por una nueva versión:
- La versión anterior se mueve a /archive.
- La nueva versión se mueve a /baseline.
- Se actualiza el historial de versiones.
- No se eliminan documentos aprobados sin justificación explícita.

## Trazabilidad
Los documentos clave (SRS, SAD, Plan de Pruebas, Matriz de Trazabilidad, Plan de Proyecto, Registro de Riesgos, SLA interno) deben mantener coherencia entre sí.
Las modificaciones relevantes en un documento pueden requerir actualización en otros.

## Responsabilidad
La responsabilidad de la gestión documental recae en el responsable del proyecto.
En caso de ampliación del equipo, esta política será revisada y adaptada si fuese necesario.

# English [en] – Documentation index
<p align="right"><a href="#español-es---índice-de-documentación">Español</a> | English</p>

# Document Management Policy
## Purpose
This policy defines the rules for creation, versioning, approval, storage, and archiving of documentation, with the goal of:
- Ensuring traceability.
- Avoiding the use of obsolete versions.
- Maintaining consistency between artifacts.
- Facilitating audits and historical reconstruction.
- It is inspired by good practices in document management and configuration management (**ISO 9001**, **ISO 10007**).

## Document states
### Aligned with ISO 9001 and documentation management
#### Common document states

1. Draft  
2. Working  
3. Wip (Work In Progress)  
4. In Progress  
5. In Review  
6. Approved  
7. Released  
8. Baseline  
9. Obsolete  
10. Archived  

Documents can be in one and only one of the following states:
- Draft → Being edited.
- In Review → Under formal review.
- Approved → Approved and in force (located in /baseline).
- Archived → Replaced or obsolete (located in /archive).


## Directory structure
Project documentation will always be organized under a directory inside the project root directory, clearly indicating in its name what it is and what it is used for.


### Main documentation location
Project documentation will always be organized under the directory:
`/docs`

Documentation will always be translated, as far as possible, under the directory corresponding to the **language code** according to **ISO 639‑1**.  
Under no circumstances will the country code from the _ISO 3166‑1 alpha‑2_ standard be used.

Example:
```
/docs/[*.*]
  ├── /es
  └── /pt
```

## Documentation in editing `/draft`
From the common document states, for documentation being drafted or under review, files will be placed under the /draft directory.

```
/docs/draft
  ├── /docs/draft/01_conventions/es
  ├── /docs/draft/01_conventions/pt
  |
  ├── /docs/draft/01_conventions/...
  ├── /docs/draft/01_conventions/[other languages code]
  ├── /docs/draft/01_conventions/...
  |
  └── /docs/draft/01_conventions/it
```

Characteristics:
- They may be freely modified at any time by qualified personnel designated for the task.
- They are not considered official.
- They must not be used as contractual or acceptance reference.

## Official approved documentation (ISO 10007) `/baseline`
Contains approved and current versions of documentation that has been drafted, reviewed, and approved.
Files will be located under the /baseline directory and only files with **[filename].PDF** extension will be accepted.

```
/docs/draft
  ├── /docs/baseline/01_conventions/es
  ├── /docs/baseline/01_conventions/pt
  ├── /docs/baseline/02_analysis/es
  ├── /docs/baseline/02_analysis/pt
  |
  ├── /docs/baseline/03_brand_guidelines/...
  ├── /docs/baseline/03_brand_guidelines/[other languages code]
  ├── /docs/baseline/03_brand_guidelines/...
  |
  └── /docs/baseline/03_brand_guidelines/pt
```

Characteristics:
- They represent the official version of the document.
- They serve as reference for development, testing, and management.
- They are only updated by a formal version increment.
- Once a document enters /baseline, it is considered controlled.
- All staff will have (read‑only) access to the documentation stored here.

## Replaced or obsolete official documentation `/archive`
Contains replaced or obsolete documents.
Files will be located under the `/archive` directory.

```
/docs/archived
  ├── /docs/archived/[year]/01_conventions/es
  ├── /docs/archived/[year]/02_analysis/es
  ├── /docs/archived/[year]/03_brand_guidelines/es
  |
  ├── /docs/archived/Obsolete/[year]/01_conventions/es
  ├── /docs/archived/Obsolete/[year]/02_analysis/es
  |
  ├── /docs/archived/Obsolete/[year]/02_analysis/...
  ├── /docs/archived/Obsolete/[year]/02_analysis/[other languages code]
  ├── /docs/archived/Obsolete/[year]/02_analysis/...
  |
  └── /docs/archived/Obsolete/[year]/03_brand_guidelines/es
```

Characteristics:
- They are not current.
- They are kept for historical traceability.
- They must not be modified.
- They must not be used as operational reference.

## Versioning
A simplified semantic versioning is used:

- 0.x → preliminary versions.
- 1.0.0 → first approved version.
- Major increment (2.0.0, 3.0.0, x.0.0…) → structural changes or significant redefinition.
- Minor increment (1.1.0, 1.2.0, x.y.0…) → improvements or extensions.
- Patch increment (1.0.1, 1.0.2, x.y.z…) → minor fixes.

Each document must include:
- Project name.
- Document name.
- Version number.
- Status (Draft / Approved / Archived).

## File naming
For documents located only in /docs/draft: <br>
`[Project]_[DocumentNameOrType]_[Version]_[Status].[extension]`

For documents located only in /docs/baseline: <br>
`[Project]_[DocumentNameOrType]_[Version].[extension]`


*_Example_* <br>
`Mexus_SRS-Software-Requirement-Specification_v1.0_InReview.[ext]`

```
/docs
  ├── /draft/02_analysis/es/Mexus_SRS-Software-Requirement-Specification_v0.1.docx
  ├── /baseline/02_analysis/es/Mexus_SRS-Software-Requirement-Specification_v1.2.4.pdf
  ├── /archive/2026/02_analysis/es/Mexus_SRS-Software-Requirement-Specification_v1.2.1.pdf
  └── /archive/Obsolete/2025/02_analysis/es/Mexus_SRS-Software-Requirement-Specification_v1.0.0.pdf
```

## Approval
A document is considered approved when:
- Its content has been completed according to its defined table of contents.
- Its consistency with related artifacts has been reviewed.
- Its status has been recorded as “Approved”.
- It has been moved to the /baseline directory.

Approval implies that the document becomes part of the controlled configuration of the project.

## Replacement and archiving
When an approved document is replaced by a new version:
- The previous version is moved to /archive.
- The new version is moved to /baseline.
- The version history is updated.
- Approved documents are not deleted without explicit justification.

## Traceability
Key documents (SRS, SAD, Test Plan, Traceability Matrix, Project Plan, Risk Register, internal SLA) must remain consistent with each other.
Relevant changes in one document may require updating others.

## Responsibility
Responsibility for document management lies with the project owner/manager.
If the team grows, this policy will be reviewed and adapted if necessary.
