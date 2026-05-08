output "default_host_name" {
  description = "The *.azurestaticapps.net hostname. Use this as the CNAME target for www."
  value       = azurerm_static_web_app.web.default_host_name
}

output "deployment_token" {
  description = "Deployment token for GitHub Actions. Store as a repo secret."
  value       = azurerm_static_web_app.web.api_key
  sensitive   = true
}

#output "apex_validation_token" {
#  description = "TXT record value to add at the registrar for apex domain validation."
#  value       = azurerm_static_web_app_custom_domain.apex.validation_token
#}