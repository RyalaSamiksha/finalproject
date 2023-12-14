const vulnerabilies = [
  {
    id: 1,
    priority: "medium",
    name: "Cross-Site Scripting (XSS)",
    problem:
      "XSS allows attackers to inject malicious scripts into web pages that are viewed by other users.",
    solution:
      "Encode user input and validate data on the server side. Implement Content Security Policy (CSP) headers to restrict the types of content that can be executed.",
  },
  {
    id: 2,
    priority: "high",
    name: "Cross-Site Request Forgery (CSRF) Tokens Not Implemented",
    problem:
      "CSRF occurs when an attacker tricks a user's browser into making an unintended request on a trusted site where the user is authenticated.",
    solution:
      " Implement anti-CSRF tokens in forms to validate requests. These tokens should be unique per session and tied to the user's authentication status.",
  },
  {
    id: 3,
    priority: "low",
    name: "Security Misconfigurations",
    problem:
      "Security misconfigurations occur when a website or server is not securely configured, exposing sensitive information or unnecessary functionality.",
    solution:
      "Regularly audit and review server configurations. Disable unnecessary services, apply the principle of least privilege, and keep software and frameworks updated.",
  },
  {
    id: 4,
    priority: "low",
    name: "Broken Authentication and Session Management",
    problem:
      " Weaknesses in authentication and session management can lead to unauthorized access and session hijacking.",
    solution:
      "Use strong password policies, implement multi-factor authentication, and ensure secure session management practices. Regenerate session IDs on login and log out.",
  },
  {
    id: 5,
    priority: "medium",
    name: "Insecure Direct Object References (IDOR)",
    problem:
      "IDOR occurs when an application provides direct access to objects based on user-supplied input.",
    solution:
      " Implement proper access controls, validate user input, and use indirect references (e.g., use a unique identifier rather than relying on user-supplied parameters).",
  },
  {
    id: 6,
    priority: "medium",
    name: "Security Headers",
    problem:
      " Lack of security headers can expose a website to various attacks.",
    solution:
      " Implement security headers such as Content Security Policy (CSP), Strict-Transport-Security (HSTS), and X-Frame-Options to enhance the security of your website.",
  },
  {
    id: 7,
    priority: "high",
    name: "Denial of Service (DoS) and Distributed Denial of Service (DDoS)",
    problem:
      "DoS and DDoS attacks overwhelm a website's resources, making it unavailable to users.",
    solution:
      "Implement rate limiting, use Content Delivery Networks (CDNs), and configure firewalls to mitigate the impact of DoS and DDoS attacks.",
  },
  {
    id: 8,
    priority: "high",
    name: "XML External Entity (XXE) Injection",
    problem:
      "XXE occurs when an application processes XML input insecurely, allowing an attacker to include malicious external entities.",
    solution:
      "Disable external entity processing in XML parsers. Use a modern XML library with built-in protection against XXE.",
  },
  {
    id: 9,
    priority: "high",
    name: "Clickjacking",
    problem:
      "Clickjacking involves tricking a user into clicking on something different from what the user perceives, potentially leading to unintended actions.",
    solution:
      " Implement frame-busting code to prevent your site from being embedded in iframes. Use the X-Frame-Options header to control framing behavior.",
  },
  {
    id: 10,
    priority: "medium",
    name: "Server-Side Request Forgery (SSRF)",
    problem:
      "SSRF occurs when an attacker can make the server perform unauthorized requests on their behalf.",
    solution:
      "Implement proper input validation and sanitization. Restrict the server's ability to make requests to external resources.",
  },
  {
    id: 11,
    priority: "low",
    name: "Security Bypass Through Subdomain Takeover",
    problem:
      "Attackers can take over abandoned subdomains to exploit trust in a site's infrastructure.",
    solution:
      "Regularly audit and monitor subdomains. Remove DNS records for unused subdomains or use them actively to avoid takeover.",
  },
  {
    id: 12,
    priority: "medium",
    name: "Improper Error Handling",
    problem:
      "Revealing sensitive information in error messages can aid attackers in understanding the application's structure and potential vulnerabilities.",
    solution:
      " Customize error messages to provide minimal information to users. Log detailed errors on the server side for debugging purposes.",
  },
  {
    id: 13,
    priority: "medium",
    name: "Transport Layer Security (TLS) Issues",
    problem:
      "Weak TLS configurations or outdated protocols can expose the website to man-in-the-middle attacks.",
    solution:
      "Use the latest TLS version, disable deprecated protocols, and configure strong cipher suites. Regularly update SSL/TLS certificates.",
  },
  {
    id: 14,
    priority: "medium",
    name: "Session Sidejacking (Session Hijacking)",
    problem:
      " Attackers intercept and use session cookies to gain unauthorized access to a user's account",
    solution:
      " Use secure, encrypted connections (HTTPS), implement secure cookie attributes, and consider using session tokens that change with each request.",
  },
  {
    id: 15,
    priority: "medium",
    name: "HTML5 Security Issues",
    problem:
      "Misuse of HTML5 features, such as localStorage, can lead to security vulnerabilities.",
    solution:
      " Be cautious with client-side storage, validate and sanitize inputs, and implement proper security headers.",
  },
  {
    id: 16,
    name: "Content Spoofing",
    priority: "medium",
    problem:
      "Content spoofing occurs when an attacker manipulates the content displayed to users, potentially leading to phishing attacks.",
    solution:
      " Implement proper validation and encoding of user-generated content. Use security headers to prevent content-type sniffing.",
  },
  {
    id: 17,
    priority: "low",
    name: "Security Headers Missing",
    problem:
      " Missing or misconfigured security headers can expose a website to various attacks.",
    solution:
      "Implement security headers such as Strict-Transport-Security (HSTS), Content-Security-Policy (CSP), and X-Content-Type-Options to enhance security.",
  },
  {
    id: 18,
    priority: "low",
    name: "Inadequate Cross-Origin Resource Sharing (CORS) Configuration",
    problem:
      "Misconfigured CORS settings can lead to security vulnerabilities by allowing unauthorized domains to make requests.",
    solution:
      "Set up proper CORS headers to control which domains can access resources on your website. Be restrictive by default.",
  },
  {
    id: 19,
    priority: "medium",
    name: "Missing Function-Level Access Controls",
    problem:
      " Lack of proper access controls allows unauthorized users to access functionalities they shouldn't.",
    solution:
      "Implement proper access controls at both the front-end and back-end to ensure users can only access functionalities they are authorized for.",
  },
  {
    id: 20,
    priority: "medium",
    name: "HTTP Parameter Pollution (HPP)",
    problem:
      "HPP occurs when multiple values are given for the same parameter, potentially leading to confusion and security issues.",
    solution:
      " Validate and sanitize user inputs. Avoid relying solely on client-side validation and implement server-side checks.",
  },
  {
    id: 21,
    priority: "high",
    name: "Weak Password Policies",
    problem:
      "Weak password policies, such as allowing easily guessable passwords, can lead to unauthorized access.",
    solution:
      " Enforce strong password policies, including complexity requirements and regular password changes. Implement multi-factor authentication (MFA) for added security.",
  },
  {
    id: 22,
    priority: "high",
    name: "Malicious File Execution",
    problem:
      "Allowing user-uploaded files to be executed on the server can lead to remote code execution.",
    solution:
      "Store user uploads in a secure location, validate file types, and use proper permissions. Consider using content-disposition headers to control file execution.",
  },
  {
    id: 23,
    priority: "medium",
    name: "XML External Entity (XXE) Attack",
    problem:
      "XXE occurs when an attacker can include external entities in XML documents, leading to information disclosure or denial of service.",
    solution:
      "Disable external entity processing in XML parsers and use secure parsing libraries. Avoid including user-controlled data in XML documents.",
  },
  {
    id: 24,
    priority: "medium",
    name: "API Security Issues",
    problem:
      " Insecure APIs can lead to data exposure, unauthorized access, or other security issues.",
    solution:
      "Implement proper authentication and authorization for APIs. Use HTTPS, validate and sanitize inputs, and monitor API usage for suspicious activity.",
  },
  {
    id: 25,
    priority: "high",
    name: "Command Injection",
    problem:
      "Attackers can execute arbitrary commands on the server by manipulating inputs that are passed to system commands.",
    solution:
      "Use parameterized queries and input validation. Avoid using user input to construct system commands.",
  },
  {
    id: 26,
    priority: "high",
    name: "LDAP Injection",
    problem:
      "Attackers manipulate LDAP queries to gain unauthorized access or retrieve sensitive information.",
    solution:
      " Use parameterized queries, input validation, and LDAP libraries that handle input securely.",
  },
  {
    id: 27,
    priority: "high",
    name: "WebSockets Security Issues",
    problem:
      "Insecure use of WebSockets can lead to various vulnerabilities, including data leakage and unauthorized access.",
    solution:
      "Implement secure WebSocket communication, use encryption (WSS), and validate and sanitize WebSocket data.",
  },
  {
    id: 28,
    priority: "medium",
    name: "Bypassing Authentication",
    problem:
      "Weaknesses in authentication mechanisms allow attackers to gain unauthorized access.",
    solution:
      "Implement strong password policies, multi-factor authentication, and regular security audits of authentication processes.",
  },
  {
    id: 29,
    priority: "medium",
    name: "Container Security Issues",
    problem:
      "Misconfigured or insecurely deployed containers can expose vulnerabilities in containerized applications.",
    solution:
      "Follow container security best practices, regularly scan container images for vulnerabilities, and apply security patches.",
  },
  {
    id: 30,
    priority: "medium",
    name: "DOM-based Cross-Site Scripting (DOM XSS)",
    problem:
      "DOM-based XSS occurs when client-side scripts manipulate the DOM in an unsafe way.",
    solution:
      "Sanitize and validate user inputs on the client side, use secure coding practices, and implement Content Security Policy (CSP)",
  },
  {
    id: 31,
    priority: "low",
    name: "Object Serialization Vulnerabilities",
    problem:
      " Insecure deserialization of objects can lead to remote code execution or other security issues.",
    solution:
      " Avoid deserializing untrusted data, use secure deserialization libraries, and validate serialized data.",
  },
  {
    id: 32,
    priority: "medium",
    name: "OAuth and OpenID Connect Security Issue",
    problem:
      " Misconfigurations or weaknesses in OAuth and OpenID Connect implementations can lead to unauthorized access.",
    solution:
      " Implement OAuth and OpenID Connect securely, validate tokens, and follow best practices for authentication and authorization.",
  },
  {
    id: 33,
    priority: "high",
    name: "DNS Spoofing",
    problem:
      "Attackers manipulate DNS responses to redirect users to malicious sites.",
    solution:
      "Implement DNS security measures, use DNS Security Extensions (DNSSEC), and monitor DNS traffic for suspicious activities.",
  },
  {
    id: 34,
    priority: "high",
    name: "IPv6 Security Issues",
    problem:
      " Insecure implementation of IPv6 can lead to various vulnerabilities, including network attacks.",
    solution:
      " Follow IPv6 security best practices, use firewalls to control traffic, and regularly audit IPv6 configurations.",
  },
  {
    id: 35,
    priority: "high",
    name: "Universal XSS (UXSS)",
    problem:
      " UXSS occurs when an attacker exploits vulnerabilities in the browser to execute malicious scripts.",
    solution:
      "Keep browsers and browser extensions up-to-date, use security headers, and implement Content Security Policy (CSP).",
  },
  {
    id: 36,
    priority: "high",
    name: "Eavesdropping ",
    problem:
      "Attackers intercept and monitor communication between two parties, leading to data exposure.",
    solution:
      "Use secure, encrypted connections (HTTPS), implement secure authentication mechanisms, and monitor for unusual network activity.",
  },
  {
    id: 37,
    priority: "medium",
    name: "Server-Side Request Forgery (SSRF) in Third-Party Services",
    problem:
      "Attackers exploit SSRF vulnerabilities to make requests to internal resources or third-party services.",
    solution:
      "Implement proper input validation and restrict the server's ability to make requests to external resources.",
  },
];

export default vulnerabilies;
