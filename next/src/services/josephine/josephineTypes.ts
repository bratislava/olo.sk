/**
 * Types were created semi-automatically following these steps:
 *  - fetch all tenders from Josephine API
 *  - create Typescript types by https://jsonformatter.org/xml-to-typescript
 *  - adjust the types manually - mostly by making some types more generic
 *    (e.g. change enum to string while keeping the original enum in comments)
 *  - add comments from Josephine docs (e.g. '"0" = nie, "1" = áno' or '"0" = nákup, "1" = predaj')
 *
 *  Note: We use generated interfaces instead of manually changing them into types, event though we prefer types.
 */

export interface JosephineObject {
  tenders: Tenders
}

export interface Tenders {
  tender: Tender[]
}

export interface Tender {
  tender_id: string
  tender_promoter: string // always 'Odvoz a likvidácia odpadu a.s.'
  tender_name: string
  tender_public_name: string // TenderGroupEnum
  tender_group: string // TenderGroupEnum
  tender_centralized?: string // "0" = nie, "1" = áno
  tender_number: string
  tender_reference_number: string
  tender_ted_number: string
  tender_description: string
  tender_split?: string // "0" = nie, "1" = áno
  tender_dns: string // "0" = nie, "1" = áno
  tender_type: string // TenderType
  tender_sale: string // "0" = nákup, "1" = predaj
  tender_storned: string
  tender_storned_at: string
  tender_main_cpv_name: string
  tender_main_cpv_code: string
  tender_result?: string // TenderResult
  tender_predicted_value?: string
  tender_evaluation?: string
  tender_auction?: string // "0" = nie, "1" = áno
  tender_contents: TenderContents
  tender_rate_with_vat?: string
  tender_rounds: TenderRounds
  tender_link: string
  tender_contact_person: TenderContactPerson
  tender_currency: string // always EUR
  tender_documents: TenderDocuments
  tender_documents_download_zip: string
  tender_parts?: TenderParts
  tender_parent_id?: string
}

export interface TenderContactPerson {
  name: string

  email: string
  phone: string
}

export interface TenderContents {
  tender_content: TenderContentElement[] | TenderContentElement
}

export enum TenderContentElement {
  Služby = 'Služby',
  StavebnéPráce = 'Stavebné práce',
  Tovar = 'Tovar',
}

export interface TenderDocuments {
  tender_document: TenderDocumentElement[] | TenderDocumentElement
}

export interface TenderDocumentElement {
  tender_document_name: string
  tender_document_created_at: Date
  tender_document_type: string // TenderDocumentType
  tender_document_size: string
  tender_document_url: string
}

export enum TenderDocumentType {
  DokumentODodaníAPrebratíPlneniaZmluvy = 'Dokument o dodaní a prebratí plnenia zmluvy',
  InformáciaOVýsledkuVyhodnoteniaPonúk = 'Informácia o výsledku vyhodnotenia ponúk',
  InýDokumentKZákazke = 'Iný dokument k zákazke',
  OdôvodnenieNezrušeniaPoužitéhoPostupu = 'Odôvodnenie nezrušenia použitého postupu',
  PonukyUchádzačov = 'Ponuky uchádzačov',
  SprávaOZákazke = 'Správa o zákazke',
  SumaSkutočneUhradenéhoPlnenia = 'Suma skutočne uhradeného plnenia',
  SúťažnéPodklady = 'Súťažné podklady',
  Zmluva = 'Zmluva',
  ZápisnicaOPosúdeníSplneniaPodmienokÚčasti = 'Zápisnica o posúdení splnenia podmienok účasti',
  ZápisnicaOVyhodnoteníPonúk = 'Zápisnica o vyhodnotení ponúk',
  ZápisnicaZOtváraniaPonúk = 'Zápisnica z otvárania ponúk',
  ŽiadosťOVysvetlenieŽiadostiOÚčasť = 'Žiadosť o vysvetlenie "Žiadosti o účasť"',
}

export enum TenderGroupEnum {
  DNS = 'DNS',
  NadlimitnáZákazka = 'Nadlimitná zákazka',
  PodlimitnáZákazka = 'Podlimitná zákazka',
  PodlimitnáZákazkaBezVyužitiaElektronickéhoTrhoviska = 'Podlimitná zákazka bez využitia elektronického trhoviska',
  PrieskumTrhu = 'Prieskum trhu',
  PrípravnéTrhovéKonzultácie = 'Prípravné trhové konzultácie',
  RokovacieKonanieSoZverejnením = 'Rokovacie konanie so zverejnením',
  VerejnáSúťaž = 'Verejná súťaž',
  VerejnáSúťažPodľa667 = 'Verejná súťaž podľa § 66 (7)',
  ZákazkaSNízkouHodnotou = 'Zákazka s nízkou hodnotou',
  ZákazkaVDNS = 'Zákazka v DNS',
}

export interface TenderParts {
  tender_part: TenderPart[]
}

export interface TenderPart {
  tender_part_name: string
  tender_part_predicted_value?: string
  tender_part_evaluation: string
  tender_part_auction: string // "0" = nie, "1" = áno
  tender_part_result: string // TenderResult
  tender_part_main_cpv_name: string
  tender_part_main_cpv_code: string
  tender_part_documents: TenderPartDocuments | string // sometimes it's nonempty string with whitespaces
}

export interface TenderPartDocuments {
  tender_part_document: TenderPartDocumentElement[] | TenderPartDocumentElement
}

export interface TenderPartDocumentElement {
  tender_part_document_name: string
  tender_part_document_created_at: Date
  tender_part_document_type: string // TenderDocumentType
  tender_part_document_size: string
  tender_part_document_url: string
}

export enum TenderResult {
  BezUzatvorenieZmluvy = 'Bez uzatvorenie zmluvy',
  UzavretieJednorázovejZmluvy = 'Uzavretie jednorázovej zmluvy',
  UzavretieRámcovejDohody = 'Uzavretie rámcovej dohody',
}

export interface TenderRounds {
  tender_round: TenderRoundElement[] | TenderRoundElement
}

export interface TenderRoundElement {
  tender_round_id: string
  tender_round_name: string
  tender_round_type: string // TenderRoundType
  tender_round_from: Date
  tender_round_to: Date
}

export enum TenderRoundType {
  Aukcia = 'Aukcia',
  LenKomunikácia = 'Len komunikácia',
  Ponuka = 'Ponuka',
  PonukaLenDokumenty = 'Ponuka (len dokumenty)',
  PrieskumTrhu = 'Prieskum trhu',
  Žiadosť = 'Žiadosť',
}

export enum TenderType {
  DNS = 'DNS',
  Vz = 'VZ',
}
