# Lateralus — Social Share Posts

Ready-to-post content for launching Lateralus to the community.
Copy, paste, and go.

---

## 1. Reddit — r/ProgrammingLanguages

**Title:** Lateralus — a pipeline-native programming language with |>, pattern matching, and async/await

**Body:**

Hey r/ProgrammingLanguages!

I've been building a new compiled language called **Lateralus** and I'd love your feedback.

**The core idea:** data flows left-to-right with the pipeline operator `|>`, so you never write inside-out nested function calls again.

```
// Instead of:  sort(filter(map(data, f), p), cmp)
// You write:
data
    |> map(f)
    |> filter(p)
    |> sort(cmp)
```

**What else is in the language:**
- **Pattern matching** with guards — exhaustive, concise
- **async/await** with `spawn` for lightweight concurrency
- **try/recover/ensure** — Result-based error handling, no exceptions
- **Structs, enums, impl blocks** — Rust-inspired type system
- **String interpolation** — `"Hello, {name}!"`
- **Zero-dependency install** — `pip install lateralus-lang`

**Try it now — no install needed:**
👉 https://bad-antics.github.io/lateralus/playground/

The playground has 8 preloaded examples (pipelines, pattern matching, async, structs, web servers, etc.) — pick one, hit Run, and start editing.

**Links:**
- Website: https://bad-antics.github.io/lateralus/
- GitHub: https://github.com/bad-antics/lateralus-lang
- VS Code extension: https://marketplace.visualstudio.com/items?itemName=lateralus.lateralus-lang
- PyPI: https://pypi.org/project/lateralus-lang/

The language is young and I genuinely want feedback — what clicks, what feels off, what's missing. Issues and discussions are open on GitHub.

Thanks for reading!

---

## 2. Hacker News — Show HN

**Title:** Show HN: Lateralus – A pipeline-native language with |>, pattern matching, and async/await

**URL:** https://bad-antics.github.io/lateralus/playground/

**Comment:**

Hi HN! I built Lateralus, a compiled programming language designed around the pipeline operator (`|>`).

The idea: most languages let you compose functions, but the result reads inside-out. Lateralus makes data flow explicit and linear. Every transformation reads top-to-bottom.

Quick example:

    let report = transactions
        |> filter(|t| t.amount > 20.0)
        |> group_by(|t| t.category)
        |> sort_by(|e| e.total, descending)

Other features: exhaustive pattern matching with guards, async/await with spawn, try/recover/ensure error handling (no exceptions), structs with impl blocks, string interpolation.

You can try it in the browser with the playground (link above) — 8 examples, a code editor, and simulated execution. No install needed.

Install locally: `pip install lateralus-lang`

VS Code extension: search "Lateralus" in the marketplace.

The ecosystem has 22+ repos including a compiler, OS kernel, web framework, tutorials, and ML tools. All open source under MIT.

Very much looking for feedback — what syntax decisions make sense, what's confusing, and what you'd want to see next. Issues and Discussions are open on GitHub: https://github.com/bad-antics/lateralus-lang

---

## 3. dev.to Article

**Title:** I built a programming language where data flows left-to-right

**Tags:** programming, languages, opensource, showdev

**Cover image alt:** Lateralus — a pipeline-native programming language

---

# I built a programming language where data flows left-to-right

Every modern language lets you compose functions. But the result looks like this:

```
sort(filter(map(data, transform), predicate), comparator)
```

You read `sort` first, but it executes last. Your eyes jump right-to-left, inside-to-outside. Add more nesting and it gets worse.

**What if the code read the same way the data flows?**

```
data
    |> map(transform)
    |> filter(predicate)
    |> sort(comparator)
```

That's [Lateralus](https://bad-antics.github.io/lateralus/) — a compiled programming language where the pipeline operator `|>` is a first-class citizen, not an afterthought.

## What else is in the language?

**Pattern matching with guards:**
```
match shape {
    Circle(r) if r > 100.0  => "Large circle",
    Circle(r)               => "Circle (r={r})",
    Rect(w, h) if w == h    => "Square",
    Rect(w, h)              => "Rectangle ({w}x{h})",
}
```

**Async concurrency:**
```
async fn fetch_all(urls: [String]) -> [Response] {
    urls
        |> map(|url| spawn { http::get(url) |> await })
        |> await_all()
}
```

**Error handling without exceptions:**
```
try {
    let config = parse_config("app.conf")?
} recover err {
    println("Failed: {err}")
} ensure {
    cleanup()
}
```

## Try it right now

I built a [browser playground](https://bad-antics.github.io/lateralus/playground/) with 8 preloaded examples. Pick one, hit Run, start editing. Zero install.

Or install locally:

```bash
pip install lateralus-lang
```

VS Code extension:

```bash
code --install-extension lateralus.lateralus-lang
```

## The ecosystem

Lateralus isn't just a language spec — it's 22+ open-source repositories:

- [Compiler & VM](https://github.com/bad-antics/lateralus-compiler)
- [Tutorials](https://github.com/bad-antics/lateralus-tutorials) — step-by-step learning path
- [VS Code extension](https://marketplace.visualstudio.com/items?itemName=lateralus.lateralus-lang)
- [OS kernel](https://github.com/bad-antics/lateralus-os) — yes, an OS in Lateralus
- [Web framework](https://github.com/bad-antics/lateralus-web-framework) with pipeline routing
- ML tools, game engine, crypto libraries, and more

## I need your feedback

The language is young. I want to know:

- Does the pipeline syntax feel natural?
- What's confusing or missing?
- What would you build with this?

👉 [Try the playground](https://bad-antics.github.io/lateralus/playground/)
👉 [Star on GitHub](https://github.com/bad-antics/lateralus-lang)
👉 [Join the discussion](https://github.com/bad-antics/lateralus-lang/discussions)

---

## 4. Twitter / X Thread

**Tweet 1:**
I built a programming language where data flows left-to-right. 🌀

Instead of: sort(filter(map(data, f), p), cmp)

You write:
data
  |> map(f)
  |> filter(p)
  |> sort(cmp)

It's called Lateralus — and you can try it right now in your browser 👇
https://bad-antics.github.io/lateralus/playground/

**Tweet 2:**
What else is in Lateralus?

⚡ async/await with spawn
🔀 Exhaustive pattern matching with guards  
🛡️ try/recover/ensure (no exceptions)
📦 Zero-dep install: pip install lateralus-lang
🧩 VS Code extension on the marketplace

**Tweet 3:**
The ecosystem has 22+ open-source repos:

🔧 Compiler & VM
📚 Tutorials
💻 OS kernel (yes, an OS)
🌐 Web framework
🤖 ML tools

All MIT licensed.

Try it → https://bad-antics.github.io/lateralus/playground/
GitHub → https://github.com/bad-antics/lateralus-lang

---

## 5. Lobsters

**Title:** Lateralus: A pipeline-native language with |>, pattern matching, async/await

**URL:** https://bad-antics.github.io/lateralus/playground/

**Tags:** plt, compilers, show

---

## 6. PLDB Submission Notes

**For https://pldb.io — submit via GitHub issue or PR to pldb repo:**

```yaml
title: Lateralus
type: pl
appeared: 2024
creators: bad-antics
website: https://bad-antics.github.io/lateralus/
github: https://github.com/bad-antics/lateralus-lang
pypiPackage: lateralus-lang
fileExtensions: ltl
description: A pipeline-native compiled programming language with pipeline operators, pattern matching, async/await, and zero dependencies.
features:
  - Pipeline operator (|>)
  - Pattern matching with guards
  - Async/await with spawn
  - try/recover/ensure error handling
  - Structs, enums, impl blocks
  - String interpolation
  - Module system
```

---

## Quick Checklist Before Posting

- [ ] Playground is live at /lateralus/playground/
- [ ] Blog post is live at /lateralus/blog/
- [ ] Landing page links to playground
- [ ] GitHub README links to playground
- [ ] Star count is visible
- [ ] Discussions are enabled
- [ ] Issue templates work
- [ ] Post to r/ProgrammingLanguages first (most receptive audience)
- [ ] Post to HN next day (different timezone coverage)
- [ ] Publish dev.to article same week
- [ ] Submit to PLDB
