/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArAddress = /* GraphQL */ `
  subscription OnCreateArAddress(
    $id: ID
    $Agency_id: ID
    $RegisteredPerson: String
    $ProcurementStaff: String
    $CompanyName: String
  ) {
    onCreateArAddress(
      id: $id
      Agency_id: $Agency_id
      RegisteredPerson: $RegisteredPerson
      ProcurementStaff: $ProcurementStaff
      CompanyName: $CompanyName
    ) {
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
export const onUpdateArAddress = /* GraphQL */ `
  subscription OnUpdateArAddress(
    $id: ID
    $Agency_id: ID
    $RegisteredPerson: String
    $ProcurementStaff: String
    $CompanyName: String
  ) {
    onUpdateArAddress(
      id: $id
      Agency_id: $Agency_id
      RegisteredPerson: $RegisteredPerson
      ProcurementStaff: $ProcurementStaff
      CompanyName: $CompanyName
    ) {
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
export const onDeleteArAddress = /* GraphQL */ `
  subscription OnDeleteArAddress(
    $id: ID
    $Agency_id: ID
    $RegisteredPerson: String
    $ProcurementStaff: String
    $CompanyName: String
  ) {
    onDeleteArAddress(
      id: $id
      Agency_id: $Agency_id
      RegisteredPerson: $RegisteredPerson
      ProcurementStaff: $ProcurementStaff
      CompanyName: $CompanyName
    ) {
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
export const onCreateArAgency = /* GraphQL */ `
  subscription OnCreateArAgency(
    $id: ID
    $Agency_id: ID
    $SubId: String
    $Agency_Price_Group: ID
    $Agency_Name: String
  ) {
    onCreateArAgency(
      id: $id
      Agency_id: $Agency_id
      SubId: $SubId
      Agency_Price_Group: $Agency_Price_Group
      Agency_Name: $Agency_Name
    ) {
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
export const onUpdateArAgency = /* GraphQL */ `
  subscription OnUpdateArAgency(
    $id: ID
    $Agency_id: ID
    $SubId: String
    $Agency_Price_Group: ID
    $Agency_Name: String
  ) {
    onUpdateArAgency(
      id: $id
      Agency_id: $Agency_id
      SubId: $SubId
      Agency_Price_Group: $Agency_Price_Group
      Agency_Name: $Agency_Name
    ) {
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
export const onDeleteArAgency = /* GraphQL */ `
  subscription OnDeleteArAgency(
    $id: ID
    $Agency_id: ID
    $SubId: String
    $Agency_Price_Group: ID
    $Agency_Name: String
  ) {
    onDeleteArAgency(
      id: $id
      Agency_id: $Agency_id
      SubId: $SubId
      Agency_Price_Group: $Agency_Price_Group
      Agency_Name: $Agency_Name
    ) {
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
export const onCreateArAgencyOrderInfo = /* GraphQL */ `
  subscription OnCreateArAgencyOrderInfo(
    $id: ID
    $Agency_id: ID
    $QuoteNumber: String
    $Product_Code: String
    $Product_Name_j: String
  ) {
    onCreateArAgencyOrderInfo(
      id: $id
      Agency_id: $Agency_id
      QuoteNumber: $QuoteNumber
      Product_Code: $Product_Code
      Product_Name_j: $Product_Name_j
    ) {
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
export const onUpdateArAgencyOrderInfo = /* GraphQL */ `
  subscription OnUpdateArAgencyOrderInfo(
    $id: ID
    $Agency_id: ID
    $QuoteNumber: String
    $Product_Code: String
    $Product_Name_j: String
  ) {
    onUpdateArAgencyOrderInfo(
      id: $id
      Agency_id: $Agency_id
      QuoteNumber: $QuoteNumber
      Product_Code: $Product_Code
      Product_Name_j: $Product_Name_j
    ) {
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
export const onDeleteArAgencyOrderInfo = /* GraphQL */ `
  subscription OnDeleteArAgencyOrderInfo(
    $id: ID
    $Agency_id: ID
    $QuoteNumber: String
    $Product_Code: String
    $Product_Name_j: String
  ) {
    onDeleteArAgencyOrderInfo(
      id: $id
      Agency_id: $Agency_id
      QuoteNumber: $QuoteNumber
      Product_Code: $Product_Code
      Product_Name_j: $Product_Name_j
    ) {
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
export const onCreateArCampaign = /* GraphQL */ `
  subscription OnCreateArCampaign(
    $id: ID
    $Title: String
    $Term_From: AWSDateTime
    $Term_To: AWSDateTime
    $Wholes_Rate_Condision: String
  ) {
    onCreateArCampaign(
      id: $id
      Title: $Title
      Term_From: $Term_From
      Term_To: $Term_To
      Wholes_Rate_Condision: $Wholes_Rate_Condision
    ) {
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
export const onUpdateArCampaign = /* GraphQL */ `
  subscription OnUpdateArCampaign(
    $id: ID
    $Title: String
    $Term_From: AWSDateTime
    $Term_To: AWSDateTime
    $Wholes_Rate_Condision: String
  ) {
    onUpdateArCampaign(
      id: $id
      Title: $Title
      Term_From: $Term_From
      Term_To: $Term_To
      Wholes_Rate_Condision: $Wholes_Rate_Condision
    ) {
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
export const onDeleteArCampaign = /* GraphQL */ `
  subscription OnDeleteArCampaign(
    $id: ID
    $Title: String
    $Term_From: AWSDateTime
    $Term_To: AWSDateTime
    $Wholes_Rate_Condision: String
  ) {
    onDeleteArCampaign(
      id: $id
      Title: $Title
      Term_From: $Term_From
      Term_To: $Term_To
      Wholes_Rate_Condision: $Wholes_Rate_Condision
    ) {
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
export const onCreateArCustomer = /* GraphQL */ `
  subscription OnCreateArCustomer(
    $id: ID
    $CustomerCodeKey: String
    $AccounKey: String
    $CustomerCode: String
    $CustomerAccountGroup: String
  ) {
    onCreateArCustomer(
      id: $id
      CustomerCodeKey: $CustomerCodeKey
      AccounKey: $AccounKey
      CustomerCode: $CustomerCode
      CustomerAccountGroup: $CustomerAccountGroup
    ) {
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
export const onUpdateArCustomer = /* GraphQL */ `
  subscription OnUpdateArCustomer(
    $id: ID
    $CustomerCodeKey: String
    $AccounKey: String
    $CustomerCode: String
    $CustomerAccountGroup: String
  ) {
    onUpdateArCustomer(
      id: $id
      CustomerCodeKey: $CustomerCodeKey
      AccounKey: $AccounKey
      CustomerCode: $CustomerCode
      CustomerAccountGroup: $CustomerAccountGroup
    ) {
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
export const onDeleteArCustomer = /* GraphQL */ `
  subscription OnDeleteArCustomer(
    $id: ID
    $CustomerCodeKey: String
    $AccounKey: String
    $CustomerCode: String
    $CustomerAccountGroup: String
  ) {
    onDeleteArCustomer(
      id: $id
      CustomerCodeKey: $CustomerCodeKey
      AccounKey: $AccounKey
      CustomerCode: $CustomerCode
      CustomerAccountGroup: $CustomerAccountGroup
    ) {
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
export const onCreateArInventory = /* GraphQL */ `
  subscription OnCreateArInventory(
    $id: ID
    $Agency_Price_Group: ID
    $Product_Code: String
    $Supplier: String
    $Product_Name_j: String
  ) {
    onCreateArInventory(
      id: $id
      Agency_Price_Group: $Agency_Price_Group
      Product_Code: $Product_Code
      Supplier: $Supplier
      Product_Name_j: $Product_Name_j
    ) {
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
export const onUpdateArInventory = /* GraphQL */ `
  subscription OnUpdateArInventory(
    $id: ID
    $Agency_Price_Group: ID
    $Product_Code: String
    $Supplier: String
    $Product_Name_j: String
  ) {
    onUpdateArInventory(
      id: $id
      Agency_Price_Group: $Agency_Price_Group
      Product_Code: $Product_Code
      Supplier: $Supplier
      Product_Name_j: $Product_Name_j
    ) {
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
export const onDeleteArInventory = /* GraphQL */ `
  subscription OnDeleteArInventory(
    $id: ID
    $Agency_Price_Group: ID
    $Product_Code: String
    $Supplier: String
    $Product_Name_j: String
  ) {
    onDeleteArInventory(
      id: $id
      Agency_Price_Group: $Agency_Price_Group
      Product_Code: $Product_Code
      Supplier: $Supplier
      Product_Name_j: $Product_Name_j
    ) {
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
