/**
 * Product label template generator
 * This file contains the template for generating product labels
 */

interface LabelTemplateData {
  productName: string;
  note?: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  packingDate: string;
  storeInfo: string;
}

/**
 * Generate HTML for a product label
 * @param data Label data to use in the template
 * @returns HTML string for the label
 */
export const generateLabelHtml = (data: LabelTemplateData): string => {
  // Format numbers with thousand separators
  const formatCurrency = (amount: number): string => {
    return amount.toLocaleString("vi-VN");
  };

  // Return the complete HTML template
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Label Print</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <style>
        @page {
            size: 100mm 75mm;
            margin: 0;
        }
        html, body {
            width: 100mm;
            height: 75mm;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-family: 'Montserrat', Arial, sans-serif;
            transform: scale(0.99);
            transform-origin: top left;
        }
        .label {
            width: 100mm;
            height: 75mm;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid black; /* Thin border around the label */
            box-sizing: border-box; /* Ensures border is part of the total size */
        }
        .title {
            font-size: 30px;
            font-weight: 700;
        }
        .note {
            font-size: 20px;
            font-weight: 400;
        }
        .details {
            font-size: 20px;
            font-weight: 400;
        }
        .highlight {
            font-size: 20px;
            font-weight: 700;
        }
        .footer {
            font-size: 15px;
            font-weight: 400;
        }
    </style>
</head>
<body>
    <div class="label">
        <div class="title">${data.productName}</div>
        ${data.note ? `<div class="note">Ghi chú: ${data.note}</div>` : ""}
        <div class="details">Đơn giá bán lẻ: ${formatCurrency(
          data.unitPrice
        )} đ</div>
        <div class="details">Số kg: ${data.quantity}Kg</div>
        <div class="details">Thành tiền: <span class="highlight">${formatCurrency(
          data.totalPrice
        )} đ</span></div>
        <div class="details">Ngày đóng: ${data.packingDate}</div>
        <br>
        <div class="footer">${data.storeInfo}</div>
    </div>
</body>
</html>
  `;
};

export default generateLabelHtml;
