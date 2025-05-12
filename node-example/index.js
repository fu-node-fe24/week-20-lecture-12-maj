// Exempel på core-moduler
// const fs = require('fs');
import fs from 'fs';
// const path = require('path');
import path from 'path';
// const http = require('http');
import http from 'http';

// Extern modul
// const express = require('express');
// import express from 'express';

// Egna moduler
// const {add, greet} =  require('./functions.js');
import { add, greet } from './functions.js';

add(3, 7);
greet('Filip');