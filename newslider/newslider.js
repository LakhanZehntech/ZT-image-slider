import { LightningElement, api, wire, track } from "lwc";
import getManagedContentByContentKeys from "@salesforce/apex/ManagedContentCtrlrlakhan.getContent"; // apex class
import { loadStyle } from "lightning/platformResourceLoader"; // css loder
import customSR from "@salesforce/resourceUrl/newheight"; // style css
import basePath from "@salesforce/community/basePath"; //basepath

var arr

export default class Newslider extends LightningElement {
    
  //   @api bntLabel;
  @api networkName;
  @api contentId;
  @api contentId2;
  @api contentId3;
  @api contentId4;
  @api contentId5;
  @api contentId6;

  @track shanData;
  @track shanError;
  // @api communityId;
  // @api communitykey;

  //images
  @track imageUrl;
  @track imageUrl2;
  @track imageUrl3;
  @track imageUrl4;
  @track imageUrl5;
  @track imageUrl6;

//image height and width
  @api height;
  @api width;

  // for slide title
  @api strTitle1 = 'Enter your title';
  @api strTitle2 = 'Enter your title';
  @api strTitle3 = 'Enter your title';
  @api strTitle4 = 'Enter your title';
  @api strTitle5 = 'Enter your title';
  @api strTitle6 = 'Enter your title';

  // for slide description
  @api description1 = 'Enter your description';
  @api description2 = 'Enter your description';
  @api description3 = 'Enter your description';
  @api description4 = 'Enter your description';
  @api description5 = 'Enter your description';
  @api description6 = 'Enter your description';

  // for slide alternative Text
  @api alternative1 = 'Enter your alternative text';
  @api alternative2 = 'Enter your alternative text';
  @api alternative3 = 'Enter your alternative text';
  @api alternative4 = 'Enter your alternative text';
  @api alternative5 = 'Enter your alternative text';
  @api alternative6 = 'Enter your alternative text';

  // for slide hrefText
  @api href1 = 'Enter your href';
  @api href2 = 'Enter your href';
  @api href3 = 'Enter your href';
  @api href4 = 'Enter your href';
  @api href5 = 'Enter your href';
  @api href6 = 'Enter your href';

  // show and hide
  @api showImage1 = false;
  @api showImage2 = false;
  @api showImage3 = false;
  @api showImage4 = false;
  @api showImage5 = false;
  @api showImage6 = false;

  // scroll 
  @api scrollduration;

    // text color
    @api color

    //bg color
    @api carouselcolor
  
    // title
    @api title
    @api titlefont
  
    //description
    @api description
    @api descriptionfont
  
    // indicator background color
    @api bgindicator
  
    // indicator boder color
    @api bordercolorindicator
  
    //display
    @api display

    // carousel content position
    @api position

    // carousel content height
    @api carouselcontentheight

    get Firstslide(){
      return !! this.imageUrl;
    }

    get FirstSecound(){
      return !! this.imageUrl2;
    }

    get FirstThird(){
      return !! this.imageUrl3;
    }

    get Fourt(){
      return !! this.imageUrl4;
    }

    get Fifth(){
      return !! this.imageUrl5;
    }

    get Sixth(){
      return !! this.imageUrl6;
    }







  // shan code
  handleClick = () => {
    console.log("You clicked me!");
    console.log("contentId", this.contentkey);
  };

  @wire(getManagedContentByContentKeys, {
    contentId: "$contentId",
    page: 0,
    pageSize: 1,
    language: "en_US",
    filterby: "",
    networkName: arr,
  })
  managedContent({ error, data }) {
    if (data) {
      if (data.source) {
        console.log('data', data.source);
        this.imageUrl =
          basePath + "/sfsites/c" + data.source.url;

          console.log("imageUrl");
          console.log(this.imageUrl);

          console.log("basePath");
          console.log(this.basePath);

          
          console.log("contentId");
          console.log(this.contentId);

      }
    } else if (error) {
      console.log("error:", error);
      // Handle the error.
      this.shanError = error;
    }
  }

  

  // image2
  @wire(getManagedContentByContentKeys, {
    contentId: "$contentId2",
    page: 0,
    pageSize: 1,
    language: "en_US",
    filterby: "",
    networkName: arr,
  })
  managedContent2({ error, data }) {
    if (data) {
      if (data.source) {
        console.log('data', data.source);
        this.imageUrl2 =
          basePath + "/sfsites/c" + data.source.url;
      }
    } else if (error) {
      console.log("error:", error);
      // Handle the error.
      this.shanError = error;
    }
  }

   // image3
   @wire(getManagedContentByContentKeys, {
    contentId: "$contentId3",
    page: 0,
    pageSize: 1,
    language: "en_US",
    filterby: "",
    networkName: arr,
  })
  managedContent3({ error, data }) {
    if (data) {
      if (data.source) {
        console.log('data', data.source);
        this.imageUrl3 =
          basePath + "/sfsites/c" + data.source.url;
      }
    } else if (error) {
      console.log("error:", error);
      // Handle the error.
      this.shanError = error;
    }
  }

   // image4
   @wire(getManagedContentByContentKeys, {
    contentId: "$contentId4",
    page: 0,
    pageSize: 1,
    language: "en_US",
    filterby: "",
    networkName: arr,
  })
  managedContent4({ error, data }) {
    if (data) {
      if (data.source) {
        console.log('data', data.source);
        this.imageUrl4 =
          basePath + "/sfsites/c" + data.source.url;
      }
    } else if (error) {
      console.log("error:", error);
      // Handle the error.
      this.shanError = error;
    }
  }

   // image5
   @wire(getManagedContentByContentKeys, {
    contentId: "$contentId5",
    page: 0,
    pageSize: 1,
    language: "en_US",
    filterby: "",
    networkName: arr,
  })
  managedContent5({ error, data }) {
    if (data) {
      if (data.source) {
        console.log('data', data.source);
        this.imageUrl5 =
          basePath + "/sfsites/c" + data.source.url;
      }
    } else if (error) {
      console.log("error:", error);
      // Handle the error.
      this.shanError = error;
    }
  }

     // image6
     @wire(getManagedContentByContentKeys, {
      contentId: "$contentId6",
      page: 0,
      pageSize: 1,
      language: "en_US",
      filterby: "",
      networkName: arr,
    })
    managedContent6({ error, data }) {
      if (data) {
        if (data.source) {
          console.log('data', data.source);
          this.imageUrl6 =
            basePath + "/sfsites/c" + data.source.url;
        }
      } else if (error) {
        console.log("error:", error);
        // Handle the error.
        this.shanError = error;
      }
    }



  renderedCallback() {
    Promise.all([loadStyle(this, customSR)]);
    arr = basePath.split("/")[1];
    console.log("arr",arr);
    console.log("srr2",arr[1]);
    // console.log("test");
    // console.log(this.contentId2);
    // console.log(this.contentId3);
    // console.log(this.contentId4);
    // console.log(this.contentId5);
    // console.log(this.contentId6);


    //  image height and width 
    this.template
      .querySelector("lightning-carousel")
      .style.setProperty("--my-height", this.height);

    this.template
      .querySelector("lightning-carousel")
      .style.setProperty("--my-width", this.width);

    //  titile and description background section color  and hide show
    this.template
      .querySelector("lightning-carousel")
      .style.setProperty("--my-carouselcolor", this.carouselcolor);

    this.template
      .querySelector("lightning-carousel")
      .style.setProperty("--my-display", this.display);

      this.template
      .querySelector("lightning-carousel")
      .style.setProperty("--my-carouselcontentheight", this.carouselcontentheight);

      this.template
      .querySelector("lightning-carousel")
      .style.setProperty("--my-position", this.position);



    // title 
    this.template
      .querySelector("lightning-carousel")
      .style.setProperty("--my-title", this.title);

    this.template
      .querySelector("lightning-carousel")
      .style.setProperty("--my-titlefont", this.titlefont);

    //  description  
    this.template
      .querySelector("lightning-carousel")
      .style.setProperty("--my-description", this.description);

    this.template
      .querySelector("lightning-carousel")
      .style.setProperty("--my-descriptionfont", this.descriptionfont);

    // carousel__indicator border and background color
    this.template
      .querySelector("lightning-carousel")
      .style.setProperty("--my-bgindicator", this.bgindicator);

    this.template
      .querySelector("lightning-carousel")
      .style.setProperty("--my-bordercolorindicator", this.bordercolorindicator);
  }
}