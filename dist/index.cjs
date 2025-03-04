'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lr = require('@lezer/lr');
var highlight = require('@lezer/highlight');
var language = require('@codemirror/language');

// Custom tags.
const directive = highlight.Tag.define();
const oscall = highlight.Tag.define();
const opcode = highlight.Tag.define();
const register = highlight.Tag.define();
const sep = highlight.Tag.define();
const label = highlight.Tag.define();

const lc3Highlighting = highlight.styleTags({
    Comment: highlight.tags.comment,
    Directive: directive,
    OsCall: oscall,
    OpCode: opcode,
    Register: register,
    String: highlight.tags.string,
    Number: highlight.tags.number,
    Seperator: sep,
    Label: label
});
language.syntaxHighlighting(
  language.HighlightStyle.define(
    [
        { tag: highlight.tags.comment, color: "#45873a"},
        { tag: directive, color: "#8c897b"},
        { tag: oscall, color: "#85d7ee"},
        { tag: opcode, color: "#5399ca"},
        { tag: register, color: "#42a171"},
        { tag: label, color: "#dcd99b"},
        { tag: highlight.tags.number, color: "#aec996"},
        { tag: highlight.tags.string, color: "#d69d85"},
        { tag: sep, color: "#000000"},
    ],
    { all: { color: "#9381c8" } }
  )
);

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_Label = {__proto__:null,GETC:28, OUT:28, PUTS:28, IN:28, PUTSP:28, HALT:28, ADD:30, AND:30, JMP:30, RET:30, JSR:30, JSRR:30, NOT:30, RTI:30, TRAP:30, LD:30, LDI:30, LDR:30, LEA:30, ST:30, STI:30, STR:30, BR:30, BRn:30, BRz:30, BRp:30, BRnz:30, BRnp:30, BRzp:30, BRnzp:30, r0:32, r1:32, r2:32, r3:32, r4:32, r5:32, r6:32, r7:32, R0:32, R1:32, R2:32, R3:32, R4:32, R5:32, R6:32, R7:32};
const parser = lr.LRParser.deserialize({
  version: 14,
  states: "nOVQPOOOOQO'#Cb'#CbOOQO'#Cd'#CdOOQO'#Ce'#CeQOQPOO",
  stateData: "t~O]OS~OQSORSOSSOTSOVSOYSO^PO_QO`RO~O",
  goto: "^YPPPPPPZPZZRSO",
  nodeNames: "⚠ LC3Text Seperator Comment String Directive OsCall Label OpCode Register Number",
  maxTerm: 16,
  propSources: [lc3Highlighting],
  skippedNodes: [0],
  repeatNodeCount: 0,
  tokenData: ")d~R]XYzYZz]^zpqzrs!P|}$i}!O$n!O!P%U!Q!R$w!R![$|!]!^(j!c!})R#T#o)R~!PO]~~!SWpq!Pqr!Prs!ls#O!P#O#P!q#P;'S!P;'S;=`$c<%lO!P~!qOS~~!tXrs!P!P!Q!P#O#P!P#U#V!P#Y#Z!P#b#c!P#f#g!P#h#i!P#i#j#a~#dR!Q![#m!c!i#m#T#Z#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![!P!c!i!P#T#Z!P~$fP;=`<%l!P~$nOQ~~$qQ!Q!R$w!R![$|~$|OY~~%RPY~!Q![$|~%XT!d!e%h!g!h&P!h!i'U!q!r'b!u!v't~%kP!n!o%n~%qP!m!n%t~%wP!y!z%z~&POT~~&SQ!p!q&Y!z!{&`~&]P!f!g%z~&cP!v!w&f~&iP!g!h&l~&oP!t!u&r~&uP!p!q&x~&{P!c!d'O~'RP!n!o%z~'XP!k!l'[~'_P!n!o'O~'eP!t!u'h~'kP!k!l'n~'qP!i!j%z~'wP!v!w'z~'}P!t!u(Q~(TP!k!l(W~(ZP!p!q(^~(aP!i!j(d~(gP!|!}%z~(oSR~OY(jZ;'S(j;'S;=`({<%lO(j~)OP;=`<%l(j~)WSV~!Q![)R!c!})R#R#S)R#T#o)R",
  tokenizers: [0],
  topRules: {"LC3Text":[0,1]},
  specialized: [{term: 7, get: (value) => spec_Label[value] || -1}],
  tokenPrec: 0
});

exports.parser = parser;
