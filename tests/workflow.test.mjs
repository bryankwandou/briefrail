import test from "node:test";import assert from "node:assert/strict";
function canApprove(comments){return comments.every(comment=>comment.resolved)}
function invoiceEligible(entries){return entries.filter(entry=>entry.billable&&!entry.invoiced)}
function invoiceTotal(entries){return invoiceEligible(entries).reduce((sum,entry)=>sum+entry.minutes/60*entry.hourlyRate,0)}
test("approval is blocked while any redline remains open",()=>{assert.equal(canApprove([{resolved:true},{resolved:false}]),false);assert.equal(canApprove([{resolved:true},{resolved:true}]),true)});
test("invoice excludes previously invoiced time",()=>{const entries=[{minutes:60,hourlyRate:100,billable:true,invoiced:false},{minutes:120,hourlyRate:100,billable:true,invoiced:true},{minutes:30,hourlyRate:100,billable:false,invoiced:false}];assert.equal(invoiceEligible(entries).length,1);assert.equal(invoiceTotal(entries),100)});
test("second invoice pass has no eligible entries",()=>{const first=[{minutes:90,hourlyRate:120,billable:true,invoiced:false}];assert.equal(invoiceTotal(first),180);const after=first.map(entry=>({...entry,invoiced:true}));assert.equal(invoiceTotal(after),0)});
test("missing brief facts stay explicit",()=>{const fields={objective:"Launch campaign",timeline:"Needs client input"};assert.equal(fields.timeline,"Needs client input");assert.notEqual(fields.timeline,"ASAP")});