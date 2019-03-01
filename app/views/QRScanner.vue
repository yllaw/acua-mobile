<template>
  <Page>
    <ActionBar title="QR Scanner"></ActionBar>

    <GridLayout columns="*" rows="auto, auto, auto, auto">
      <Label row="0" class="message" text="Look for a QR code to scan at your local Animal Care and Control Center" textWrap="true"></Label>

      <BarcodeScanner
          row="1"
          height="300"
          formats="QR_CODE, EAN_13, UPC_A"
          beepOnScan="true"
          reportDuplicates="true"
          preferFrontCamera="false"
          @scanResult="onScanResult"
          v-if="isIOS">
      </BarcodeScanner>

      <Button row="2" class="btn btn-primary btn-rounded-sm" text="Scan QR Code" @tap="doScan"></Button>

    </GridLayout>
  </Page>
</template>

<script>
  import { isIOS } from "tns-core-modules/platform"
  import { BarcodeScanner } from "nativescript-barcodescanner"
  import { mapMutations, mapState } from "vuex"
  import TicketForm from "./TicketForm.vue"

  export default {
    data() {
      return {
        isIOS,
        ticketForm: TicketForm,
        locations: {
          '1': 'Agoura',
          '2': 'Baldwin Park',
          '3': 'Carson/Gardena',
          '4': 'Castaic',
          '5': 'Downey',
          '6': 'Lancaster',
          '7': 'Palmdale'
        }
      }
    },
    computed: {
      ...mapState(['userTicket'])
    },
    methods: {
      ...mapMutations(['setTicketLocation']),
      onScanResult(evt) {
        console.log(`onScanResult: ${evt.text} (${evt.format})`)
      },
      doScan() {
        this.scan()
      },
      scan() {
        new BarcodeScanner().scan({
          cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
          cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
          message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
          preferFrontCamera: false,     // Android only, default false
          showFlipCameraButton: true,   // default false
          showTorchButton: true,        // iOS only, default false
          torchOn: false,               // launch with the flashlight on (default false)
          resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
          beepOnScan: true,             // Play or Suppress beep on scan (default true)
          openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
          closeCallback: () => {
            console.log("Scanner closed @ " + new Date().getTime())
          }
        }).then(
            result => {
              if (this.locations.hasOwnProperty(result.text)) {
                this.setTicketLocation(result.text)

                console.log("--- scanned: " + result.text)
                // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
                setTimeout(() => {
                  // if this alert doesn't show up please upgrade to {N} 2.4.0+
                  alert({
                    title: "Scan result",
                    message: "You are at the " + this.locations[result.text] + " center.",
                    okButtonText: "OK"
                  })
                }, 500)

                this.$navigateTo(this.ticketForm)

              } else {
                setTimeout(() => {
                  // if this alert doesn't show up please upgrade to {N} 2.4.0+
                  alert({
                    title: "Scan result",
                    message: "Invalid QR Code",
                    okButtonText: "OK"
                  })
                }, 500)
              }
            },
            errorMessage => {
              console.log("No scan. " + errorMessage)
            }
        )
      }
    }
  }
</script>

<style scoped>
  ActionBar {
    background-color: #009fca;
    color: #ffffff;
  }

  .message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
  }
</style>
