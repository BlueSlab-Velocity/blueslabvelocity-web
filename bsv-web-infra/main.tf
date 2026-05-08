resource "azurerm_resource_group" "web" {
  name     = "rg-bsv-web-${var.environment}-weu"
  location = var.location
  tags     = var.tags
}

resource "azurerm_static_web_app" "web" {
  name                = "swa-bsv-web-${var.environment}"
  resource_group_name = azurerm_resource_group.web.name
  location            = azurerm_resource_group.web.location

  sku_tier = "Free"
  sku_size = "Free"

  # Free tier does not support staging environments anyway, but explicit beats implicit.
  preview_environments_enabled = false

  tags = var.tags
}

# Apex domain: blueslabvelocity.com (TXT validation)
#resource "azurerm_static_web_app_custom_domain" "apex" {
#  static_web_app_id = azurerm_static_web_app.web.id
#  domain_name       = var.primary_domain
#  validation_type   = "dns-txt-token"
#}

# www subdomain: www.blueslabvelocity.com (CNAME validation)
#resource "azurerm_static_web_app_custom_domain" "www" {
#  static_web_app_id = azurerm_static_web_app.web.id
#  domain_name       = "www.${var.primary_domain}"
#  validation_type   = "cname-delegation"

  # Order matters: the CNAME must be in place at IONOS before this resource
  # can validate. Terraform will retry, but if you apply cold, expect the
  # first run to error and a re-apply to succeed once DNS propagates.
#}