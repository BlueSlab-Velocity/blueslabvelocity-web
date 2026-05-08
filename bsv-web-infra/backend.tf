terraform {
  backend "azurerm" {
    resource_group_name  = "rg-tfstate-bsv"
    storage_account_name = "sttfstatebsv16080"   # replace with yours
    container_name       = "tfstate"
    key                  = "web.tfstate"
    use_azuread_auth     = true
  }
}