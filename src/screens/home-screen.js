import React, { Component } from "react";
import {
  ScrollView,
  Alert,
  Text,
  StyleSheet,
  RefreshControl,
  View,
  Image,
  Dimensions,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import axios from "axios";
import isArray from "lodash/isArray";
import has from "lodash/has";
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";

import {
  doSetSingleStateHomeScreen,
  successGetDataHomeScreen
} from "../ducks/home-screen-duck";
import LabelInline from "../components/homescreen/label-inline";
import SectionCategories from "../components/homescreen/section-categories";
import SectionNews from "../components/homescreen/section-news";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    paddingVertical: 15,
    position: "absolute",
    height: 68,
    zIndex: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  main: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  containerSwiper: {
    width: "100%",
    height: Dimensions.get("screen").height / 2.4,
    elevation: 4
  },
  imagePreview: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  },
  section: {
    marginHorizontal: 12
  },
  labelSectionLeft: {
    color: "rgba(0,0,0,0.6)",
    fontWeight: "700"
  },
  labelSectionRight: {
    color: "#c5c5c5",
    fontWeight: "700"
  },
  scrollable: {
    flexDirection: "row",
    height: 105
  },
  body: {
    flex: 1,
    backgroundColor: "white"
  }
});

class HomeScreen extends Component {
  constructor() {
    super();
    this.categories = [
      {
        id: "1",
        iconName: "md-pizza",
        label: "Pizza"
      },
      {
        id: "2",
        iconName: "md-pizza",
        label: "Pizza"
      },
      {
        id: "3",
        iconName: "md-pizza",
        label: "Pizza"
      }
    ];

    this.news = [
      {
        id: "1",
        imageUrl:
          "http://shop.toffin.id/wp-content/uploads/2017/06/Artboard-3-1024x540.png",
        title: "test",
        subtitle: "helo gaes"
      },
      {
        id: "2",
        imageUrl:
          "http://shop.toffin.id/wp-content/uploads/2017/06/Artboard-3-1024x540.png",
        title: "test",
        subtitle: "helo gaes"
      },
      {
        id: "3",
        imageUrl:
          "http://shop.toffin.id/wp-content/uploads/2017/06/Artboard-3-1024x540.png",
        title: "test",
        subtitle: "helo gaes"
      }
    ];
  }
  componentDidMount() {
    this.fetchDataApi();
  }

  fetchDataApi = async () => {
    try {
      this.props.doSetSingleStateHomeScreen("loading", true);

      const firstResult = await axios.get(
        "http://shop.toffin.id/wp-json/gallery_plugin/v1/post/232"
      );

      if (!has(firstResult, "data")) {
        throw new Error(firstResult);
      }

      const secondResult = await axios.get(
        "http://shop.toffin.id/wp-json/gallery_plugin/v1/post/2201"
      );

      if (!has(secondResult, "data")) {
        throw new Error(secondResult);
      }

      this.props.successGetDataHomeScreen([
        ...firstResult.data,
        ...secondResult.data
      ]);
    } catch (e) {
      this.props.doSetSingleStateHomeScreen("loading", false);
      Alert.alert(isArray(e) ? JSON.stringify(e) : e.toString());
    }
  };

  renderItemCategories = ({ item }) => <SectionCategories {...item} />;
  renderItemNews = ({ item }) => <SectionNews {...item} />;

  render() {
    const { loading, data } = this.props;
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={this.fetchDataApi} />
        }
        contentContainerStyle={styles.container}
      >
        <View style={styles.header}>
          <View style={styles.main}>
            <Text style={styles.title}>Kuaci Bakar</Text>
          </View>
        </View>
        <Swiper style={styles.containerSwiper}>
          {data.map(item => (
            <Image
              key={item}
              source={{ uri: item }}
              resizeMode={"stretch"}
              style={styles.imagePreview}
            />
          ))}
        </Swiper>
        <View style={styles.body}>
          <View style={styles.section}>
            <LabelInline
              textLeftProps={{ style: styles.labelSectionLeft }}
              textRightProps={{ style: styles.labelSectionRight }}
              leftText={"Categories"}
              rightText={"View All"}
            />
            <FlatList
              renderItem={this.renderItemCategories}
              data={this.categories}
              removeClippedSubviews
              keyExtractor={({ id }) => id}
              style={styles.scrollable}
              horizontal
            />
          </View>
          <View style={styles.section}>
            <LabelInline
              textLeftProps={{ style: styles.labelSectionLeft }}
              textRightProps={{ style: styles.labelSectionRight }}
              leftText={"News"}
              rightText={"View All"}
            />
            <FlatList
              renderItem={this.renderItemNews}
              data={this.news}
              removeClippedSubviews
              keyExtractor={({ id }) => id}
              style={styles.scrollable}
              horizontal
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ homescreen }) => homescreen;

export default connect(
  mapStateToProps,
  {
    doSetSingleStateHomeScreen,
    successGetDataHomeScreen
  }
)(HomeScreen);
