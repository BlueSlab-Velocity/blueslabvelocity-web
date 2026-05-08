RG=rg-tfstate-bsv
LOC=uksouth
SA=sttfstatebsv$RANDOM   # must be globally unique, lowercase

az group create -n $RG -l $LOC

az storage account create \
  -n $SA -g $RG -l $LOC \
  --sku Standard_LRS \
  --kind StorageV2 \
  --min-tls-version TLS1_2 \
  --allow-blob-public-access false

az storage container create \
  --account-name $SA \
  -n tfstate \
  --auth-mode login

echo "Backend storage account: $SA"

#az storage account blob-service-properties update \
#  --account-name $SA \
#  --enable-versioning true