$(document).ready(function () {

    // Preview Chair

    $(".card").click(function (e) {
        e.preventDefault();
        const imgPreview = $("img", this).attr("src");
        const title = $("#card-title", this).html();
        const price = $("#card-text", this).html();
        $("#preview").attr("src", imgPreview);
        $("#nameProduct").html(title);
        $("#priceProduct").html(price);

        window.scrollTo({ top: 0, behavior: "smooth" });
    })

    $(".side").click(function (e) {
        e.preventDefault();
        const imgPreview = $("img", this).attr("src");
        $("#preview").attr("src", imgPreview);
    })

    // Alert

    $("#formEmail").submit(function (e) {
        e.preventDefault();
        const email = $("#inputEmail").val();
        $("#textEmail").html("Terima Kasih " + "<strong>" + email + "</strong>" + ", Link sudah dapat dilihat di email Anda");
        $("#alertEmail").css("background-color", "pink");
        $("#alertEmail").removeClass("d-none");
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    $("#alertEmail").click(function (e) {
        e.preventDefault();
        $(this).addClass("d-none");
    });

    // Form Shipping

    $("#formShipping").submit(function (e) {
        e.preventDefault();
        $(this).addClass("d-none");
        const inputAddress = $("#address").val();
        const inputFirstName = $("#firstName").val();
        const inputLastName = $("#lastName").val();
        $("#message").removeClass("d-none");
        $("#titleMessage").html("Terima Kasih, " + inputFirstName + " " + inputLastName);
        $("#mainMessage").html("Paket akan dikirim ke " + inputAddress);
    });
});