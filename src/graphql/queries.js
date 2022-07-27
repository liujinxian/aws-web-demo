/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArAddress = /* GraphQL */ `
  query GetArAddress($id: ID!, $Agency_id: ID!) {
    getArAddress(id: $id, Agency_id: $Agency_id) {
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
export const listArAddresses = /* GraphQL */ `
  query ListArAddresses(
    $filter: TableArAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const queryArAddressesByAgencyIdIdIndex = /* GraphQL */ `
  query QueryArAddressesByAgencyIdIdIndex(
    $Agency_id: ID!
    $first: Int
    $after: String
  ) {
    queryArAddressesByAgencyIdIdIndex(
      Agency_id: $Agency_id
      first: $first
      after: $after
    ) {
      items {
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
      nextToken
    }
  }
`;
export const queryArAddressesByAgencyIdUpdatedAtIndex = /* GraphQL */ `
  query QueryArAddressesByAgencyIdUpdatedAtIndex(
    $Agency_id: ID!
    $first: Int
    $after: String
  ) {
    queryArAddressesByAgencyIdUpdatedAtIndex(
      Agency_id: $Agency_id
      first: $first
      after: $after
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getArAgency = /* GraphQL */ `
  query GetArAgency($id: ID!, $Agency_id: ID!) {
    getArAgency(id: $id, Agency_id: $Agency_id) {
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
export const listArAgencies = /* GraphQL */ `
  query ListArAgencies(
    $filter: TableArAgencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArAgencies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const queryArAgenciesByAgencyEMailIndex = /* GraphQL */ `
  query QueryArAgenciesByAgencyEMailIndex(
    $Agency_Email: String!
    $first: Int
    $after: String
  ) {
    queryArAgenciesByAgencyEMailIndex(
      Agency_Email: $Agency_Email
      first: $first
      after: $after
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getArAgencyOrderInfo = /* GraphQL */ `
  query GetArAgencyOrderInfo($id: ID!, $QuoteNumber: String!) {
    getArAgencyOrderInfo(id: $id, QuoteNumber: $QuoteNumber) {
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
export const listArAgencyOrderInfos = /* GraphQL */ `
  query ListArAgencyOrderInfos(
    $filter: TableArAgencyOrderInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArAgencyOrderInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const queryArAgencyOrderInfosByAgencyIDQuoteNumberIndex = /* GraphQL */ `
  query QueryArAgencyOrderInfosByAgencyIDQuoteNumberIndex(
    $Agency_id: ID!
    $first: Int
    $after: String
  ) {
    queryArAgencyOrderInfosByAgencyIDQuoteNumberIndex(
      Agency_id: $Agency_id
      first: $first
      after: $after
    ) {
      items {
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
      nextToken
    }
  }
`;
export const queryArAgencyOrderInfosByQuoteNumberIndex = /* GraphQL */ `
  query QueryArAgencyOrderInfosByQuoteNumberIndex(
    $QuoteNumber: String!
    $first: Int
    $after: String
  ) {
    queryArAgencyOrderInfosByQuoteNumberIndex(
      QuoteNumber: $QuoteNumber
      first: $first
      after: $after
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getArCustomer = /* GraphQL */ `
  query GetArCustomer($id: ID!, $CustomerCodeKey: String!) {
    getArCustomer(id: $id, CustomerCodeKey: $CustomerCodeKey) {
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
export const listArCustomers = /* GraphQL */ `
  query ListArCustomers(
    $filter: TableArCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const queryArCustomersByCustomerCodeIndex = /* GraphQL */ `
  query QueryArCustomersByCustomerCodeIndex(
    $CustomerCodeKey: String!
    $first: Int
    $after: String
  ) {
    queryArCustomersByCustomerCodeIndex(
      CustomerCodeKey: $CustomerCodeKey
      first: $first
      after: $after
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getArInventory = /* GraphQL */ `
  query GetArInventory($id: ID!, $Product_Code: String!) {
    getArInventory(id: $id, Product_Code: $Product_Code) {
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
export const listArInventories = /* GraphQL */ `
  query ListArInventories(
    $filter: TableArInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArInventories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const queryArInventoriesByPriceGroupIndex = /* GraphQL */ `
  query QueryArInventoriesByPriceGroupIndex(
    $Agency_Price_Group: ID!
    $first: Int
    $after: String
  ) {
    queryArInventoriesByPriceGroupIndex(
      Agency_Price_Group: $Agency_Price_Group
      first: $first
      after: $after
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getArAZCustomerCode = /* GraphQL */ `
  query GetArAZCustomerCode($id: ID!) {
    getArAZCustomerCode(id: $id) {
      id
      CustomerCodeNumber
    }
  }
`;
