import {
    Html,
    Head,
    Body,
    Container,
    Heading,
    Text,
    Hr,
  } from "@react-email/components";
  
  interface EmailTemplateProps {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
  
  export function EmailTemplate({
    name,
    email,
    phone,
    message,
  }: EmailTemplateProps) {
    return (
      <Html>
        <Head />
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.heading}>
              New Contact Message from Portfolio
            </Heading>
  
            <Text style={styles.text}>
              You have received a new message through your portfolio contact page.
            </Text>
  
            <Hr style={styles.hr} />
  
            <Text style={styles.label}><strong>Name:</strong></Text>
            <Text style={styles.value}>{name}</Text>
  
            <Text style={styles.label}><strong>Email:</strong></Text>
            <Text style={styles.value}>{email}</Text>
  
            <Text style={styles.label}><strong>Phone:</strong></Text>
            <Text style={styles.value}>{phone || "Not provided"}</Text>
  
            <Text style={styles.label}><strong>Message:</strong></Text>
            <Text style={styles.message}>{message}</Text>
  
            <Hr style={styles.hr} />
  
            <Text style={styles.footer}>
              This email was automatically generated from your portfolio website.
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }
  
  const styles = {
    body: {
      backgroundColor: "#f6f9fc",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      backgroundColor: "#ffffff",
      padding: "24px",
      borderRadius: "8px",
    },
    heading: {
      fontSize: "20px",
      marginBottom: "12px",
    },
    text: {
      fontSize: "14px",
      color: "#333",
    },
    label: {
      marginTop: "12px",
      fontSize: "14px",
    },
    value: {
      fontSize: "14px",
      color: "#555",
    },
    message: {
      fontSize: "14px",
      color: "#111",
      whiteSpace: "pre-wrap",
    },
    hr: {
      margin: "20px 0",
    },
    footer: {
      fontSize: "12px",
      color: "#888",
    },
  };
  