// import { StyleSheet , Platform, SafeAreaView, Appearance, ScrollView, FlatList, View, Text, Image} from "react-native";
// import {Colors} from '@/constants/Colors'; 
// import {MENU_ITEMS} from '@/constants/MenuItems'
// import MENU_IMAGES from '@/constants/MenuImages'
// import { setStatusBarHidden } from "expo-status-bar";

// export default function MenuScreen() { 
//     const colorScheme = Appearance.getColorScheme(); 
//     const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
//     const styles = createStyles(theme, colorScheme); //styles through a function 
//     const Container = Platform.OS == 'web' ? ScrollView : SafeAreaView; //dont want a flatlist inside of a scroll view on mobile device becuase they both scroll, and can cause 2 different scrolling environments
//     const seperatorComp = <View style = {styles.seperator} />
//     const headerComp = <Text style = {styles.headerComp}>Indian Food</Text>
//     const footerComp = <Text>{ '\u00A9' } Moyam Manchurias</Text>
    
    
//     return (
//         <Container>
//             <FlatList
//                 data={MENU_ITEMS}
//                 keyExtractor={(item) => item.id.toString()} //dont have as key: value, can use this instead
//                 showsVerticalScrollIndicator = {false}
//                 contentContainerStyle = {styles.contentContainer}
//                 // ItemSeparatorComponent={seperatorComp}
//                 ListHeaderComponent={headerComp}
//                 // ListHeaderComponentStyle = {styles.headerComp}
//                 ListFooterComponent={footerComp}
//                 ListFooterComponentStyle = {styles.footerComp}
//                 ListEmptyComponent={<Text>No Items</Text>}
//                 renderItem={({item}) => ( 
//                     <View style = {styles.row}> 
//                         <View style = {styles.menuTextRow}>
//                             <Text style = {[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
//                             <Text style = {styles.menuItemText}>{item.description}</Text>
//                         </View>
//                         <Image style = {styles.image} source = {MENU_IMAGES[item.id - 1]}/> {/* ids start at 1, but array indices start at 0 */}
                        
//                     </View>
//                 )}
//             />
//         </Container>
//     )
// }

// function createStyles(theme, colorScheme){ 
//     return StyleSheet.create({ 
//         contentContainer: { 
//             paddingTop: 10, 
//             paddingBottom: 20, 
//             paddingHorizontal: 12, 
//             backgroundColor: theme.background,
//         }, 
//         seperator: { 
//             height: 1, 
//             backgroundColor: colorScheme === 'dark' ? 'papayawhip' : "",
//             width: '50%',
//             maxWidth: 600, 
//             marginHorizontal: 'auto',
//             marginBottom: 10,
//             borderStyle: 'dashed',
//             borderBottomWidth: 1, 
//             borderWidth: 1,
//             borderRadius: 1,


            
//             // borderStyle: 'dotted', 
            
//         }, 
//         footerComp: { 
//             marginHorizontal: 'auto',
//         },
//         headerComp: { 
//             marginHorizontal: 'auto',
//             textDecorationLine: 'underline',
//             fontSize: 22,
//             fontWeight: 'bold', 
//             marginBottom: 10, 
//         },
//         image: { 
//             width: '100%', 
//             height: '100%', 
//             flex: 1, 
//             resizeMode: 'cover',
//             justifyContent: 'center'
//         }, 
//         row: { 
//             flexDirection: 'row', 
//             width: '100%', 
//             maxWidth: 600, 
//             height: 100, 
//             marginBottom: 10, 
//             borderStyle: 'solid', 
//             borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
//             borderWidth: 1, 
//             borderRadius: 20, 
//             overflow: 'hidden', 
//             marginHorizontal: 'auto',
            
//             shadowColor: '#000',
//             shadowOffset: { width: 0, height: 1 },
//             shadowOpacity: 0.8,
//             shadowRadius: 5,  
//             elevation: 10,
            
//         },
//         menuTextRow: { 
//             width: '65%',
//             paddingTop: 10, 
//             paddingLeft: 10, 
//             paddingRight: 5, 
//             flexGrow: 1, //will grow to the 65% width limit everytime 
//         }, 
//         menuItemTitle: { 
//             textDecorationLine: 'underline', 
//             fontSize: 18,
//         }, 
//         menuItemText: { 
//             color: theme.text, 
//         }

//     })
// }