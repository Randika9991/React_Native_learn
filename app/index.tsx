import {Button, Text, View} from "react-native";
import {Link, router} from 'expo-router';
import {Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
        <Link href="/profile" style={{ flex: 1 }}>Button</Link>
        <Button style={styles.header} title="start" onPress={()=>router.push('/test')} >Button</Button>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 0,
    },
    scrollContainer: {
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        // borderBottomWidth: 1,
        // borderBottomColor: '#ffffff',
    },
    headerTitle: {
        color: '#ff0000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    // Favorite
    favoritplaylist: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    favoriteCard: {
        alignItems: 'center',
    },
    favoriteImageCard: {
        width: 170,
        height: 100,
        borderRadius: 10,
    },
    favoriteLabel: {
        color: '#fff',
        marginTop: 5,
    },


    // Playlist
    playlist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    playlistCard: {
        alignItems: 'center',
        marginHorizontal: 10, // Add horizontal margin to create space between items
        width: 100, // Set a fixed width
    },
    playlistImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    playlistLabel: {
        color: '#fff',
        marginTop: 5,
        width: 100,
        textAlign: 'center',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderTopColor: '#ffffff',
        borderTopWidth: 1,

        borderLeftColor: '#ffffff',
        borderLeftWidth: 2,

        borderRightColor: '#ffffff',
        borderRightWidth: 2,

        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        marginTop: 3,
        color:'#ffffff',
    },
    horizontalScrollContainer: {
        paddingHorizontal: 5,
    },
});
