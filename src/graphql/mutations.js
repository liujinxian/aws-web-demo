/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const putPost = /* GraphQL */ `
  mutation PutPost($id: ID!, $title: String!) {
    putPost(id: $id, title: $title) {
      id
      title
    }
  }
`;
export const createArAddress = /* GraphQL */ `
  mutation CreateArAddress($input: CreateArAddressInput!) {
    createArAddress(input: $input) {
      id
      Agency_id
      RegisteredPerson
      ProcurementStaff
      CompanyName
      SalesOfficeName
      ARBSalesRepresentative
      PhoneNumber
      EmailAddress
      updatedAt
      createdAt
    }
  }
`;
export const updateArAddress = /* GraphQL */ `
  mutation UpdateArAddress($input: UpdateArAddressInput!) {
    updateArAddress(input: $input) {
      id
      Agency_id
      RegisteredPerson
      ProcurementStaff
      CompanyName
      SalesOfficeName
      ARBSalesRepresentative
      PhoneNumber
      EmailAddress
      updatedAt
      createdAt
    }
  }
`;
export const deleteArAddress = /* GraphQL */ `
  mutation DeleteArAddress($input: DeleteArAddressInput!) {
    deleteArAddress(input: $input) {
      id
      Agency_id
      RegisteredPerson
      ProcurementStaff
      CompanyName
      SalesOfficeName
      ARBSalesRepresentative
      PhoneNumber
      EmailAddress
      updatedAt
      createdAt
    }
  }
`;
export const createArAgency = /* GraphQL */ `
  mutation CreateArAgency($input: CreateArAgencyInput!) {
    createArAgency(input: $input) {
      id
      Agency_id
      SubId
      Agency_Price_Group
      Agency_Name
      Company_Name
      Agency_Email
      updatedAt
      createdAt
    }
  }
`;
export const updateArAgency = /* GraphQL */ `
  mutation UpdateArAgency($input: UpdateArAgencyInput!) {
    updateArAgency(input: $input) {
      id
      Agency_id
      SubId
      Agency_Price_Group
      Agency_Name
      Company_Name
      Agency_Email
      updatedAt
      createdAt
    }
  }
`;
export const deleteArAgency = /* GraphQL */ `
  mutation DeleteArAgency($input: DeleteArAgencyInput!) {
    deleteArAgency(input: $input) {
      id
      Agency_id
      SubId
      Agency_Price_Group
      Agency_Name
      Company_Name
      Agency_Email
      updatedAt
      createdAt
    }
  }
`;
export const createArAgencyOrderInfo = /* GraphQL */ `
  mutation CreateArAgencyOrderInfo($input: CreateArAgencyOrderInfoInput!) {
    createArAgencyOrderInfo(input: $input) {
      id
      Agency_id
      QuoteNumber
      Product_Code
      Product_Name_j
      OrderQuantity
      Wholes_Rate
      Wholes_Price
      Campaign_price
      Product_id
      Quantity
      SalesGroup
      delflg
      result
      DetailNo
      updatedAt
      createdAt
    }
  }
`;
export const updateArAgencyOrderInfo = /* GraphQL */ `
  mutation UpdateArAgencyOrderInfo($input: UpdateArAgencyOrderInfoInput!) {
    updateArAgencyOrderInfo(input: $input) {
      id
      Agency_id
      QuoteNumber
      Product_Code
      Product_Name_j
      OrderQuantity
      Wholes_Rate
      Wholes_Price
      Campaign_price
      Product_id
      Quantity
      SalesGroup
      delflg
      result
      DetailNo
      updatedAt
      createdAt
    }
  }
`;
export const deleteArAgencyOrderInfo = /* GraphQL */ `
  mutation DeleteArAgencyOrderInfo($input: DeleteArAgencyOrderInfoInput!) {
    deleteArAgencyOrderInfo(input: $input) {
      id
      Agency_id
      QuoteNumber
      Product_Code
      Product_Name_j
      OrderQuantity
      Wholes_Rate
      Wholes_Price
      Campaign_price
      Product_id
      Quantity
      SalesGroup
      delflg
      result
      DetailNo
      updatedAt
      createdAt
    }
  }
`;
export const createArCampaign = /* GraphQL */ `
  mutation CreateArCampaign($input: CreateArCampaignInput!) {
    createArCampaign(input: $input) {
      id
      Title
      Term_From
      Term_To
      Wholes_Rate_Condision
      Text
      Discription
      Notification
      Remarks
      filePDF
      PDFurl
      updatedAt
      createdAt
    }
  }
`;
export const updateArCampaign = /* GraphQL */ `
  mutation UpdateArCampaign($input: UpdateArCampaignInput!) {
    updateArCampaign(input: $input) {
      id
      Title
      Term_From
      Term_To
      Wholes_Rate_Condision
      Text
      Discription
      Notification
      Remarks
      filePDF
      PDFurl
      updatedAt
      createdAt
    }
  }
`;
export const deleteArCampaign = /* GraphQL */ `
  mutation DeleteArCampaign($input: DeleteArCampaignInput!) {
    deleteArCampaign(input: $input) {
      id
      Title
      Term_From
      Term_To
      Wholes_Rate_Condision
      Text
      Discription
      Notification
      Remarks
      filePDF
      PDFurl
      updatedAt
      createdAt
    }
  }
`;
export const createArCustomer = /* GraphQL */ `
  mutation CreateArCustomer($input: CreateArCustomerInput!) {
    createArCustomer(input: $input) {
      id
      CustomerCodeKey
      AccounKey
      CustomerCode
      CustomerAccountGroup
      HonorificTitleKey
      Name1
      Name2
      Name3
      SearchTerm1
      PlaceName
      PostCode
      CountryCode
      Area
      AddressTmeZone
      LanguageCode
      FirstPhoneNumber
      AccountingCode
      InternationalPart1
      InternationalPart2
      InternationalCheckDigit
      AllocationTohierarchy
      AnnualSales
      SalesYear
      NumberOfEmployees
      Registrationyear
      NonMilitaryUse
      ExportControlTDODate
      ExportControlSDNCheckDate
      ExportControlListConfirmationDate
      TransactionClassification
      updatedAt
      createdAt
    }
  }
`;
export const updateArCustomer = /* GraphQL */ `
  mutation UpdateArCustomer($input: UpdateArCustomerInput!) {
    updateArCustomer(input: $input) {
      id
      CustomerCodeKey
      AccounKey
      CustomerCode
      CustomerAccountGroup
      HonorificTitleKey
      Name1
      Name2
      Name3
      SearchTerm1
      PlaceName
      PostCode
      CountryCode
      Area
      AddressTmeZone
      LanguageCode
      FirstPhoneNumber
      AccountingCode
      InternationalPart1
      InternationalPart2
      InternationalCheckDigit
      AllocationTohierarchy
      AnnualSales
      SalesYear
      NumberOfEmployees
      Registrationyear
      NonMilitaryUse
      ExportControlTDODate
      ExportControlSDNCheckDate
      ExportControlListConfirmationDate
      TransactionClassification
      updatedAt
      createdAt
    }
  }
`;
export const deleteArCustomer = /* GraphQL */ `
  mutation DeleteArCustomer($input: DeleteArCustomerInput!) {
    deleteArCustomer(input: $input) {
      id
      CustomerCodeKey
      AccounKey
      CustomerCode
      CustomerAccountGroup
      HonorificTitleKey
      Name1
      Name2
      Name3
      SearchTerm1
      PlaceName
      PostCode
      CountryCode
      Area
      AddressTmeZone
      LanguageCode
      FirstPhoneNumber
      AccountingCode
      InternationalPart1
      InternationalPart2
      InternationalCheckDigit
      AllocationTohierarchy
      AnnualSales
      SalesYear
      NumberOfEmployees
      Registrationyear
      NonMilitaryUse
      ExportControlTDODate
      ExportControlSDNCheckDate
      ExportControlListConfirmationDate
      TransactionClassification
      updatedAt
      createdAt
    }
  }
`;
export const createArInventory = /* GraphQL */ `
  mutation CreateArInventory($input: CreateArInventoryInput!) {
    createArInventory(input: $input) {
      id
      Agency_Price_Group
      Product_Code
      Supplier
      Product_Name_j
      Quantity
      Capacity_Display
      Catarog_Price
      Wholes_Rate
      Wholes_Price
      Delivery_Term
      Storage_Temp
      Capacity_Unit
      Capacity_Value
      Product_Name_e
      Plant_Name
      Wharehouse_Name
      Category1
      Category2
      Product_Group1
      Product_Group2
      Supplier_LotNo
      Expiration_date
      Campaign_price
      Campaign_partition_rate
      lastupdate
      LawsRegulations
      Admin_Agency_Price_Group
      Admin_Group
      updatedAt
      createdAt
      OrderQuantity
      SalesGroup
      TempInventoryQuantity
    }
  }
`;
export const updateArInventory = /* GraphQL */ `
  mutation UpdateArInventory($input: UpdateArInventoryInput!) {
    updateArInventory(input: $input) {
      id
      Agency_Price_Group
      Product_Code
      Supplier
      Product_Name_j
      Quantity
      Capacity_Display
      Catarog_Price
      Wholes_Rate
      Wholes_Price
      Delivery_Term
      Storage_Temp
      Capacity_Unit
      Capacity_Value
      Product_Name_e
      Plant_Name
      Wharehouse_Name
      Category1
      Category2
      Product_Group1
      Product_Group2
      Supplier_LotNo
      Expiration_date
      Campaign_price
      Campaign_partition_rate
      lastupdate
      LawsRegulations
      Admin_Agency_Price_Group
      Admin_Group
      updatedAt
      createdAt
      OrderQuantity
      SalesGroup
      TempInventoryQuantity
    }
  }
`;
export const deleteArInventory = /* GraphQL */ `
  mutation DeleteArInventory($input: DeleteArInventoryInput!) {
    deleteArInventory(input: $input) {
      id
      Agency_Price_Group
      Product_Code
      Supplier
      Product_Name_j
      Quantity
      Capacity_Display
      Catarog_Price
      Wholes_Rate
      Wholes_Price
      Delivery_Term
      Storage_Temp
      Capacity_Unit
      Capacity_Value
      Product_Name_e
      Plant_Name
      Wharehouse_Name
      Category1
      Category2
      Product_Group1
      Product_Group2
      Supplier_LotNo
      Expiration_date
      Campaign_price
      Campaign_partition_rate
      lastupdate
      LawsRegulations
      Admin_Agency_Price_Group
      Admin_Group
      updatedAt
      createdAt
      OrderQuantity
      SalesGroup
      TempInventoryQuantity
    }
  }
`;
