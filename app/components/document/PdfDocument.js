import React from 'react';
import { Page, Text, View, Document, Image, StyleSheet, Font } from '@react-pdf/renderer';
import DinLightFont from '../../assets/fonts/DIN-Light.ttf';
import DinBoldFont from '../../assets/fonts/DinCondensedBold.ttf';
// Register Font
Font.register({
  family: 'Din Light',
  src: DinLightFont
});

Font.register({
  family: 'Din Bold',
  src: DinBoldFont
});

const styles = StyleSheet.create({
  page: {
    padding: "40px 40px"
  },
  pageHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 40,
  },
  pageHeaderText: {
    flex: 1,
    width: "60%",
    maxWidth: "60%",
    letterSpacing: 1,
    fontWeight: 800,
    fontSize: 30,
    letterSpacing: 0.5,
    textAlign: "right"
  },
  pageHeaderTextReg: {
    fontSize: 8,
    flex: 1,
    width: "40%",
    maxWidth: "40%"
  },
  pageSubHeaderText: {
    fontFamily: "Din Bold",
    fontSize: 30,
    letterSpacing: 0.4
  },
  prodTitle: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
    textTransform: "capitalize"
  },
  prodImageSec: {
    flex: 1,
    width: "50%",
    maxWidth: '50%',
    marginRight: 5
  },
  prodImage: {
    width: "100%"
  },
  prodTitleText: {
    flex:1,
    width: "50%",
    maxWidth: "50%",
    fontFamily: "Din Bold",
    fontSize: 36,
    fontWeight: 'bold',
    marginLeft: 5,
    textTransform: "capitalize"
  },
  prodProps: {
    display: "flex",
    flexDirection: "row"
  },
  prodDimensions: {
    flex: 1,
    width: "50%",
    maxWidth: "50%",
    paddingTop: 20,
    borderTop: "2px solid #000000",
    marginRight: 20
  },
  prodDimensionsText: {
    fontFamily: "Din Bold",
    fontSize: 18,
    letterSpacing: 0.4,
    marginBottom: 10
  },
  prodDimensionsList: {
    display: "flex",
    flexDirection: "row"
  },
  prodDimensionsListItem: {
    flex: 1,
    width: "25%",
    maxWidth: "25%",
    padding: 10,
    backgroundColor: "#DDDDDB",
    margin: 1,
    textAlign: "center"
  },
  prodDimensionsListItemTitle: {
    fontFamily: "Din Light",
    fontSize: 5,
    margin: "10px 0"
  },
  prodDimensionsListItemValue: {
    fontFamily: "Din Bold",
    fontSize: 16,
    fontWeight: "bold",
    margin: "10px 0",
    letterSpacing: 1
  },
  prodMaterials: {
    flex: 1,
    width: "50%",
    maxWidth: "50%",
    paddingTop: 20,
    borderTop: "2px solid #000000",
    marginRight: 20
  },
  bar: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginBottom: 10
  },
  prodMaterialsText: {
    fontFamily: "Din Bold",
    fontSize: 18,
    marginBottom: 10,
    letterSpacing: 0.4
  },
  prodMaterialsList: {

  },
  prodMaterialItem: {
    fontFamily: "Din Light",
    fontSize: 12,
    lineHeight: 1.1,
    marginTop: 20
  },
  prodFeatures: {
    margin: "10px 0"
  },
  prodFeaturesTitle: {
    fontFamily: "Din Bold",
    fontSize: 18,
    marginBottom: 10,
    letterSpacing: 0.4
  },
  prodFeaturesText: {
    fontFamily: "Din Light",
    fontSize: 14,
  },
  prodFeaturesItem: {
    margin: "5px 0",
    lineHeight: 1.1
  },
  prodCMDList: {
    paddingTop: 20
  },
  prodCMDListItem: {
    marginTop: 20
  },
  prodCMDListItemTitle: {
    marginTop: 10,
    fontFamily: "Din Bold",
    fontSize: 12,
    fontWeight: "bold",
  },
  prodCMDListItemMaintenanceList: {
    marginTop: 20
  },
  prodCMDListItemMaintenance: {
    marginTop: 15,
    fontFamily: "Din Light",
    fontSize: 12,
    lineHeight: 1.1
  }
});

const PdfDocument = (props) => {
  const {products, selectedProducts} = props;
  return(
    <Document>
      {
        selectedProducts.map(prodIndex => {
          return (
            <React.Fragment key={prodIndex}>
              <Page size="A4" style={styles.page}>
                <View style={styles.pageHeader}>
                  <Text style={styles.pageHeaderText}>
                    Commune
                  </Text>
                  <Text style={styles.pageHeaderTextReg}>
                    &reg;
                  </Text>
                </View>
                <View style={styles.prodTitle}>
                  <View style={styles.prodImageSec}>
                    <Image
                      style={styles.prodImage}
                      source={products[prodIndex].ImageURL && products[prodIndex].ImageURL ? products[prodIndex].ImageURL.ImageURL : '/app/assets/imgs/TitleDeet.png'}
                    />
                  </View>
                  <Text style={styles.prodTitleText}>
                    {products[prodIndex].ProductName}
                  </Text>
                </View>
                <View style={styles.prodProps}>
                  <View style={styles.prodDimensions}>
                    <View style={styles.bar}></View>
                    <Text style={styles.prodDimensionsText}>
                      Dimensions
                    </Text>
                    <View style={styles.prodDimensionsList}>
                      <View style={styles.prodDimensionsListItem}>
                        <Text style={styles.prodDimensionsListItemTitle}>
                          LENGTH
                        </Text>
                        <Text style={styles.prodDimensionsListItemValue}>
                          {
                            products[prodIndex].Dimension &&
                            products[prodIndex].Dimension.Length ? products[prodIndex].Dimension.Length : ''
                          }
                        </Text>
                      </View>
                      <View style={styles.prodDimensionsListItem}>
                        <Text style={styles.prodDimensionsListItemTitle}>
                          DEPTH
                        </Text>
                        <Text style={styles.prodDimensionsListItemValue}>
                          {
                            products[prodIndex].Dimension &&
                            products[prodIndex].Dimension.Width ? products[prodIndex].Dimension.Width : ''
                          }
                        </Text>
                      </View>
                      <View style={styles.prodDimensionsListItem}>
                        <Text style={styles.prodDimensionsListItemTitle}>
                          HEIGHT
                        </Text>
                        <Text style={styles.prodDimensionsListItemValue}>
                          {
                            products[prodIndex].Dimension &&
                            products[prodIndex].Dimension.Height ? products[prodIndex].Dimension.Height : ''
                          }
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.prodMaterials}>
                    <View style={styles.bar}></View>
                    <Text style={styles.prodMaterialsText}>
                      Materials
                    </Text>
                    <View style={styles.prodMaterialsList}>
                      {
                        products[prodIndex].MaterialList &&
                        products[prodIndex].MaterialList.map((mat, index) => {
                          return(
                            <Text style={styles.prodMaterialItem} key={index}>
                              {mat.Material}
                            </Text>
                          )
                        })
                      }
                    </View>
                  </View>
                </View>
                <View style={styles.prodFeatures}>
                  <View style={styles.bar}></View>
                  <Text style={styles.prodFeaturesTitle}>Features</Text>
                  <View style={styles.prodFeaturesText}>
                    {
                      products[prodIndex].FeatureList &&
                      products[prodIndex].FeatureList.map((feature, index) => {
                        return(
                          <Text style={styles.prodFeaturesItem} key={index}>
                            {feature.Feature}
                          </Text>
                        )
                      })
                    }
                  </View>
                </View>
              </Page>
              <Page size="A4" style={styles.page}>
                <View style={styles.pageHeader}>
                  <Text style={styles.pageHeaderText}>
                    Commune
                  </Text>
                  <Text style={styles.pageHeaderTextReg}>
                    &reg;
                  </Text>
                </View>
                <View style={styles.pageSubHeader}>
                  <Text style={styles.pageSubHeaderText}>
                    Care & Maintenance
                  </Text>
                </View>
                <View style={styles.prodCMDList}>
                  {
                    products[prodIndex].ListOfCMDescriptionsList &&
                    products[prodIndex].ListOfCMDescriptionsList.map((cmditem, index) => {
                      return (
                        <View style={styles.prodCMDListItem} key={index}>
                          <View style={styles.bar}></View>
                          <Text style={styles.prodCMDListItemTitle}>
                            {cmditem.Title}
                          </Text>
                          <View style={styles.prodCMDListItemMaintenanceList}>
                            {
                              cmditem.CareAndMaintenanceList &&
                              cmditem.CareAndMaintenanceList.map((maintenance, index) => {
                                return(
                                  <Text style={styles.prodCMDListItemMaintenance} key={index}>
                                    {maintenance.Description}
                                  </Text>
                                )
                              })
                            }
                          </View>
                        </View>
                      )
                    })
                  }
                </View>
              </Page>
            </React.Fragment>
          )
        })
      }
    </Document>
  )
}

export default PdfDocument;