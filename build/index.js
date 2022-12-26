"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WinAnalysis_1 = require("./analyzers/WinAnalysis");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
// import { ConsoleReport } from './reportTargets/ConsoleReport'
const HtmlReport_1 = require("./reportTargets/HtmlReport");
const Summary_1 = require("./Summary");
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
