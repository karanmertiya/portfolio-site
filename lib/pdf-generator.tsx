import { Project } from '@/data/projects';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register fonts (using standard fonts for now to avoid loading issues)
// In a real app, you'd register custom fonts here

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 40,
    },
    header: {
        marginBottom: 20,
        borderBottom: '2px solid #3b82f6',
        paddingBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1d4ed8',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#6b7280',
    },
    section: {
        margin: 10,
        padding: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3b82f6',
        marginBottom: 8,
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
        lineHeight: 1.5,
        color: '#374151',
    },
    techStack: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        marginTop: 5,
    },
    techBadge: {
        backgroundColor: '#eff6ff',
        padding: '4px 8px',
        borderRadius: 4,
        fontSize: 10,
        color: '#1d4ed8',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        textAlign: 'center',
        color: '#9ca3af',
        fontSize: 10,
        borderTop: '1px solid #e5e7eb',
        paddingTop: 10,
    },
});

export const ProjectPDF = ({ project }: { project: Project }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.title}>{project.title}</Text>
                <Text style={styles.subtitle}>{project.description}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Problem</Text>
                <Text style={styles.text}>{project.problem}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Solution</Text>
                <Text style={styles.text}>{project.solution}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Technology Stack</Text>
                <View style={styles.techStack}>
                    {project.techStack.map((tech) => (
                        <Text key={tech} style={styles.techBadge}>
                            {tech}
                        </Text>
                    ))}
                </View>
            </View>

            {project.architecture && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Architecture</Text>
                    <Text style={styles.text}>{project.architecture.description}</Text>
                </View>
            )}

            {project.ml && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Machine Learning Metrics</Text>
                    <Text style={styles.text}>Model: {project.ml.model}</Text>
                    <Text style={styles.text}>Inference Latency: {project.ml.inferenceLatency}</Text>
                    {Object.entries(project.ml.metrics).map(([key, value]) => (
                        <Text key={key} style={styles.text}>
                            {key}: {value}
                        </Text>
                    ))}
                </View>
            )}

            <View style={styles.footer}>
                <Text>Generated from Portfolio - {new Date().getFullYear()}</Text>
            </View>
        </Page>
    </Document>
);
