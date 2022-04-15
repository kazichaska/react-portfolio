import React from "react";
import { Document, Page } from 'react-pdf';
import ResumePDF from '../../assets/resume/Resume.pdf';

export default function Resume() {
    return (
        <Document file={ResumePDF}>
            <Page pageNumber={1} />
        </Document>
    );
}
