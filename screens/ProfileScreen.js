import { Text, View, Button, StyleSheet, Image, FlatList } from "react-native";
import profileimg from "../assets/profileimg.png";
import monitor from "../assets/monitor.png";
import mobile from "../assets/mobile.png";
import laptop from "../assets/laptop.png";
import keyboard from "../assets/keyboard.png";
import dateimg from "../assets/dateimg.png";
import line from "../assets/line.png";

const employeeWithAssets = {
  employeeName: "Shruthi",
  designation: "Software Developer",
  profileImg: profileimg,
  assetsimg: [laptop, monitor, mobile, keyboard],
};
const assetDetails = [
  {
    id: 1,
    assetImg: laptop,
    assetType: "Laptop",
    assetName: "Apple",
    assetModal: "MacBook air",
    assignedDate: "01-02-2022",
  },
  {
    id: 2,
    assetImg: monitor,
    assetType: "Monitor",
    assetName: "Dell",
    assetModal: "Optiflex",
    assignedDate: "01-02-2022",
  },
  {
    id: 3,
    assetImg: mobile,
    assetType: "Mobile",
    assetName: "Apple",
    assetModal: "iphone 13 mini",
    assignedDate: "01-02-2022",
  },
  {
    id: 4,
    assetImg: keyboard,
    assetType: "Keyboard",
    assetName: "Apple",
    assetModal: "Magic Keyboard",
    assignedDate: "01-02-2022",
  },
];

const Item = ({ assetImg, assetName, assetModal, assignedDate }) => (
  <View style={{ flexDirection: "row", marginBottom: "3%" }}>
    <View
      style={[
        styles.profile,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <View style={{ width: 40, height: 40 }}>
        <Image source={assetImg} style={styles.imgstyle} />
      </View>
    </View>
    <View style={styles.role}>
      <Text style={[styles.roletitle, { fontSize: 15 }]}>{assetName}</Text>
      <Text style={[styles.roletext, { fontSize: 16 }]}>{assetModal}</Text>
    </View>
    <View style={styles.assigned}>
      <Text
        style={[
          styles.asseststext,
          { color: "black", fontSize: 10, textAlign: "center" },
        ]}
      >
        Assigned on
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View
          style={styles.assignedDate}
        >
          <View style={{ width: 15, height: 15 }}>
            <Image source={dateimg} style={styles.imgstyle} />
          </View>
        </View>
        <View style={{ flex: 1, height: 20, justifyContent: "center" }}>
          <Text style={[styles.asseststext, { color: "#3A3A3A" }]}>
            {assignedDate}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

export function ProfileScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Item
      assetImg={item.assetImg}
      assetName={item.assetName}
      assetModal={item.assetModal}
      assignedDate={item.assignedDate}
    />
  );
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginBottom: "5%" }}>
        <View
          style={[
            styles.profile,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <View style={{ width: 50, height: 50 }}>
            <Image
              source={employeeWithAssets.profileImg}
              style={styles.imgstyle}
            />
          </View>
        </View>
        <View style={[styles.role]}>
          <Text style={styles.roletitle}>
            {employeeWithAssets.employeeName}
          </Text>
          <Text style={styles.roletext}>{employeeWithAssets.designation}</Text>
        </View>
        <View style={[styles.assigned]}>
          <Text style={[styles.asseststext, { marginBottom: "5%" }]}>
            Assets assigned
          </Text>
          <View style={{ flexDirection: "row" }}>
            {employeeWithAssets?.assetsimg.map((value, index) => {
              return (
                <View style={styles.assetsimg} key={index + 1}>
                  <Image source={value} style={styles.imgstyle} />
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image source={line} style={{ width: "100%", height: 1 }} />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ color: "#8A8A8A" }}>Assets Assigned</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image source={line} style={{ width: "100%", height: 1 }} />
        </View>
      </View>
      <View>
        <FlatList
          data={assetDetails}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //container
  container: {
    flex: 1,
    padding: "2%",
    paddingTop: "5%",
    backgroundColor: "white",
  },
  //PROFILE DATA STYLES
  profile: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: "3%",
  },
  role: {
    flex: 3,
    backgroundColor: "#F0F8FF",
    justifyContent: "center",
    padding: "3%",
  },
  assigned: {
    flex: 2,
    backgroundColor: "#F0F8FF",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    padding: "3%",
  },
  //ASSETS STYLES
  assetsimg: {
    width: 22,
    height: 22,
  },
  roletitle: {
    fontWeight: "bold",
    marginBottom: 1,
    fontSize: 18,
    fontFamily: "poppins",
  },
  roletext: {
    fontSize: 12,
    fontFamily: "poppins",
    color: "#8A8A8A",
    fontWeight: "bold",
  },
  asseststext: {
    fontSize: 12,
    color: "#1E479B",
    fontWeight: "bold",
    fontFamily: "poppins",
    marginBottom: "3%",
  },
  //ALL IMAGE STYLE
  imgstyle: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  //HEADER STYLES
  headerimg: {
    width: 30,
    height: 30,
  },
  headerstyle: {
    height: 42,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  headertext: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "poppins",
    color: "#3A3A3A",
  },
  row2: {
    flexDirection: "row",
    marginBottom: "5%",
  },
  linestyle: {
    borderTopWidth: 0.5,
    borderColor: "#D6D6D6",
    //flex:1.5
  },
  assignedDate: {
    flex: 0.2,
    height: 20,
    justifyContent: "center",
    marginRight: "1%",
  },
});
