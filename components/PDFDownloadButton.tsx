'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import { ProjectPDF } from '@/lib/pdf-generator';
import { Project } from '@/data/projects';
import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function PDFDownloadButton({ project }: { project: Project }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <button className="btn-secondary" disabled>
                <Download className="w-5 h-5 mr-2" /> Loading PDF...
            </button>
        );
    }

    return (
        <PDFDownloadLink
            document={<ProjectPDF project={project} />}
            fileName={`${project.id}-case-study.pdf`}
            className="btn-secondary"
        >
            {({ blob, url, loading, error }) => (
                <>
                    <Download className="w-5 h-5 mr-2" />
                    {loading ? 'Generating PDF...' : 'Download Case Study PDF'}
                </>
            )}
        </PDFDownloadLink>
    );
}
