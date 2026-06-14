# Superpowers (vendored attribution)

This directory holds upstream attribution for [Superpowers](https://github.com/obra/superpowers) by Jesse Vincent (obra), whose development skills are vendored verbatim under `.ai/skills/dev/`.

- **Upstream:** https://github.com/obra/superpowers
- **Skills source:** https://github.com/obra/superpowers/tree/main/skills
- **License:** MIT — see [`LICENSE`](LICENSE) in this directory
- **Author:** Jesse Vincent / obra

## Why this directory exists

The Superpowers skills under `.ai/skills/dev/` are redistributed copies of MIT-licensed upstream files. The MIT license requires the copyright notice and license text to travel with redistributed copies. This directory carries that notice; the skills themselves live in `.ai/skills/dev/` where AstrAI agents load them.

## Updating the vendored skills

```
git clone https://github.com/obra/superpowers
cp -r superpowers/skills/* .ai/skills/dev/
cp superpowers/LICENSE .ai/vendor/superpowers/LICENSE
```

Do not rewrite or paraphrase Superpowers skill content. See `.ai/integrations/superpowers.md` and `.ai/NOTICE.md`.
