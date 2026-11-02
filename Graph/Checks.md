# Checks

Motion mapping and English-edition review, **2 November 2026**.

## Upstream mapping checks

The original mapping loaded all 28 text documents from the pre-Graph Motion snapshot. Source content was compared with its files. All 186 headings, six foundations, 13 results, 43 claims, 45 relations, glossary definitions, and bibliographic entries were retained.

All 1,446 source anchors were checked for existing sources and nonempty UTF-16 ranges. Versioned anchor examples were also inspected through Graph.

Live upstream queries returned 13 synthesis results and exactly these proof dependencies: P05→P04, P06→P04, P07→P06. Other associations use distinct predicates.

## Upstream validation

graph-shapes-v1 validation of the documentation context completed without recorded violations or contradictions. [Record.json](Record.json) identifies this historical result as upstream validation.

Its scope is the selected representation, not universal scientific truth, experimental adequacy, full OWL consistency, or formal verification of all proofs.

## English derivative checks

The translated edition retains stable identifiers, source count, entity count, claim count, relation types, and proof dependencies. Source texts and mapped literals are translated together. Source versions are edition-specific and all UTF-16 anchors are rebuilt against their matching texts.

Local checks verify source identifiers, nonempty in-range anchors, section labels, mapped trace and glossary fields, mathematical-expression preservation, relative links, and current checksum manifests. [Origins.tsv](../Synthesis/Origins.tsv) distinguishes original source hashes from current English hashes.

These are local structural and editorial checks. The derivative has not been revalidated by the hosted Graph service, and the upstream validation is not presented as validation of changed bytes.
