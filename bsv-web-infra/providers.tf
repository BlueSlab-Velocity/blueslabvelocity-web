terraform {
  required_version = ">= 1.9.0"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.71"
    }
  }
}

provider "azurerm" {
  features {}

  resource_provider_registrations = "none"
  # We'll register Microsoft.Web manually if needed; avoids Terraform
  # touching subscription-wide settings.
}