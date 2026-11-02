# Graph

A mapping of Motion's Foundation and Synthesis.

The upstream **Motion** model was exported at revision **2**. [Record.json](Record.json) records its identity and validation separately from this repository's English derivative, [Model.json](Model.json).

## Coverage

The map contains 28 source documents, 186 sections, six foundations, 13 synthesis results, 43 claim entries, 45 conditional relations, all glossary and notation entries, and 25 bibliographic records: 498 entities and 1,448 relationship or attribute records in total.

Full source text, formulas, proofs, counterexamples, and open questions are retained in sources. Recorded claims and relations are separately mapped with conditions and source locations. This covers the available corpus; it does not claim discovery of every implicit relation in every sentence.

## Relation meanings

- proof_uses: results used in primary proofs according to Trace.
- conceptual_connection: conceptual associations, not proof premises.
- uses_foundation: foundations named in Trace.
- result_premises, result_limits, result_status: result conditions and status.
- relation_condition, relation_meaning: qualifications of reified relations.
- claim_status, claim_conditions: source-claim status and conditions.
- document_link: navigation links, not scientific implications.

Accepted Graph records mean **the mapping is accepted as a representation of the document**. They do not promote source hypotheses or proposals into scientific facts. Queries use the **documentation** context.

No Horn rule turns documentary connections into universal laws. Mathematical proofs remain text with connected premises; the map does not formally verify all analysis, infinite quantification, or differential equations.

## Sources and versions

Of the records, 1,446 have version-specific source anchors. Two administrative records connect the project to its layers. Source snapshots precede addition of Graph, avoiding self-inclusion.

Bibliographic records describe references in the corpus, not 25 downloaded full articles or independent empirical evidence. Citations and source content remain inspectable.

## English edition

The repository edition translates documents, section labels, glossary definitions, trace fields, and embedded source snapshots. Stable entity identifiers and relation types are retained. Anchors are recalculated in UTF-16 against translated source versions; original offsets are not reused.

Historical snapshots of the project index and checksum files remain snapshots of the pre-Graph corpus. Their English versions identify the historical context. Current file-integrity manifests are outside Model.json; snapshot manifests describe the corresponding source snapshot and do not recursively hash the graph containing them.

The upstream model revision and its validation apply to the original export. Local structural and provenance checks for the translated derivative are reported separately in [Checks.md](Checks.md). Translation does not assert that the hosted Graph model has been updated.
