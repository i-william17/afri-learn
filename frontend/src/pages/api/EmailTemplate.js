import React from 'react';
import { Html, Text, Container, Heading, Hr, Preview } from '@react-email/components';

const EmailTemplate = ({ type, email }) => {
  let messageContent;
  
  switch (type) {
    case 'event':
      messageContent = 'Stay informed about our latest events!';
      break;
    case 'blog':
      messageContent = 'Check out our latest blog posts!';
      break;
    case 'research':
      messageContent = 'Get updates on our newest research publications.';
      break;
    case 'course':
      messageContent = 'Discover new courses and learning opportunities.';
      break;
    default:
      messageContent = 'Thank you for subscribing!';
  }

  return (
    <Html>
      <Preview>{`Subscription to ${type}`}</Preview>
      <Container style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <Heading style={{ fontSize: '24px', color: '#ff0000' }}>Thank You for Subscribing!</Heading>
        <Text style={{ margin: '10px 0', fontSize: '16px' }}>
          Hello {email}, <br />
          {messageContent}
        </Text>
        <Hr />
        <Text style={{ fontSize: '12px', color: '#888' }}>
          You can unsubscribe at any time by visiting your subscription settings.
        </Text>
      </Container>
    </Html>
  );
};

export default EmailTemplate;
