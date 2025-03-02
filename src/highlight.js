import { Tag, styleTags, tags as t } from "@lezer/highlight";

// Custom tags.
const directive = Tag.define();
const oscall = Tag.define();
const opcode = Tag.define();
const register = Tag.define();
const sep = Tag.define();
const label = Tag.define();

export const lc3Highlighting = styleTags({
    Comment: t.comment,
    Directive: directive,
    OsCall: oscall,
    OpCode: opcode,
    Register: register,
    String: t.string,
    Number: t.number,
    Seperator: sep,
    Label: label
});

import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
const syntax_colors = syntaxHighlighting(
  HighlightStyle.define(
    [
        { tag: t.comment, color: "#45873a"},
        { tag: directive, color: "#8c897b"},
        { tag: oscall, color: "#85d7ee"},
        { tag: opcode, color: "#5399ca"},
        { tag: register, color: "#42a171"},
        { tag: label, color: "#dcd99b"},
        { tag: t.number, color: "#aec996"},
        { tag: t.string, color: "#d69d85"},
        { tag: sep, color: "#000000"},
    ],
    { all: { color: "#9381c8" } }
  )
);

export let extensions = [syntax_colors];