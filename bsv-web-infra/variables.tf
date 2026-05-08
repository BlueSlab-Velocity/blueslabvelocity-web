variable "location" {
  description = "Azure region for the resource group. SWA static content is global; this only affects metadata and any future API."
  type        = string
  default     = "westeurope"
}

variable "environment" {
  description = "Environment tag."
  type        = string
  default     = "npr"
}

variable "primary_domain" {
  description = "Apex domain for BSV."
  type        = string
  default     = "blueslabvelocity.com"
}

variable "tags" {
  description = "Common tags."
  type        = map(string)
  default = {
    workload    = "web"
    owner       = "bsv"
    cost-centre = "marketing"
    managed-by  = "terraform"
  }
}