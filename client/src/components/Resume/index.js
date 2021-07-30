// RESUME JS
// ---------------------------------------------------------------------------

import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import file from './kenneth-petiote.pdf';

export default function Resume() {
  return (
    <main className="container resume-padding-top">
      <div className="card border-0 shadow my-5">
        <div className="card-body p-5">
          <div className="row">
            <div className="col-xs-5 col-md-6">
              <Document file={file}>
                <Page pageNumber={1} /> 
              </Document>
            </div>

            <div className="col-xs-5 col-md-6">
            <Document file={file}>
              <Page pageNumber={2} /> 
            </Document>
            </div>

            </div>
          </div>
        </div>
    </main>
  );
}