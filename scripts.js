function submitContactForm(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  const company = form.company.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const subject = encodeURIComponent(`Website enquiry from ${name || 'a visitor'}`);
  const body = encodeURIComponent(`Name: ${name}
Company: ${company}
Email: ${email}

Message:
${message}`);

  window.location.href = `mailto:asif@coolingequipmentservices.in?subject=${subject}&body=${body}`;
  return false;
}
