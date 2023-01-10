import React, { Component } from "react";
import AboutSection from "./BodySections/AboutSection";
import DiscoverSection from "./BodySections/DiscoverSection";
import ExperienceSection from "./BodySections/ExperienceSection";
import HomeSection from "./BodySections/HomeSection";
import PlacesSection from "./BodySections/PlacesSection";
import SponserSection from "./BodySections/SponserSection";
import SubscribeSection from "./BodySections/SubscribeSection";
import VideoSection from "./BodySections/VideoSection";

export class SectionContainer extends Component {
  render() {
    return (
      <div>
        <HomeSection />
        <AboutSection />
        <DiscoverSection />
        <ExperienceSection />
        <VideoSection />
        <PlacesSection />
        <SubscribeSection />
        <SponserSection />
      </div>
    );
  }
}

export default SectionContainer;
